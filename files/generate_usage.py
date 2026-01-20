#!/usr/bin/env python3

# Copyright Contributors to the Packit project.
# SPDX-License-Identifier: MIT

import sys
import click
import requests
import json
import pygal
from pygal.style import DefaultStyle, DarkStyle

from collections import defaultdict


def generate_graph(title, data, path, value_text="builds", style=DefaultStyle):
    """
    Generate a treemap from our data
    """
    treemap = pygal.Treemap(
        title=title,
        value_formatter=("{} " + value_text).format,
        truncate_legend=32,
        style=style,
    )

    for name, value in data:
        # This condition is needed for rendering non-grouped data
        if isinstance(value, int):
            value = {name: value}
        items = [{"value": v, "label": k} for k, v in value.items()]
        treemap.add(name, items)
    treemap.render_to_file(path)


@click.command()
def generate_usage_treemap():
    """
    Generate usage heatmaps
    """
    click.echo("Loading new data")
    try:
        response = requests.request(
            method="GET", url="https://prod.packit.dev/api/usage?top=1000&from=1994-01-01"
        )
        response.raise_for_status()
        result = json.loads(response.content)
    except requests.exceptions.RequestException as e:
        click.echo(f"Error fetching usage data: {e}", err=True)
        sys.exit(1)
    except json.JSONDecodeError as e:
        click.echo(f"Error parsing JSON response: {e}", err=True)
        sys.exit(1)

    failed_jobs = []

    for job_name, job_data in result["jobs"].items():
        try:
            job_name_human_readable = (
                job_name.replace("_", " ")
                .capitalize()
                .replace(" Groups", "s")
                .replace(" Targets", "s")
                .replace("Vm", "VM")
                .replace("Tft", "TFT")
                .replace("Srpm", "SRPM")
            )

            data_namespaces = defaultdict(int)
            for p, c in job_data["top_projects_by_job_runs"].items():
                data_namespaces[
                    p.removeprefix("https://github.com/").rsplit("/", maxsplit=1)[0]
                ] += c

            sorted_data = sorted(data_namespaces.items(), key=lambda x: -x[1])  # [:3]

            for style, style_class in (("light", DefaultStyle), ("dark", DarkStyle)):
                generate_graph(
                    f"Packit: {job_name_human_readable}",
                    data=sorted_data,
                    path=f"./static/img/usage/{job_name}_{style}.svg",
                    value_text=("builds" if "build" in job_name else "runs"),
                    style=style_class,
                )
        except Exception as e:
            click.echo(f"Error generating graph for {job_name}: {e}", err=True)
            failed_jobs.append(job_name)

    if failed_jobs:
        click.echo(f"Failed: {', '.join(failed_jobs)}", err=True)
        sys.exit(1)
    
    click.echo("Successfully generated all usage graphs")


if __name__ == "__main__":
    generate_usage_treemap()

#!/usr/bin/env python3

# Copyright Contributors to the Packit project.
# SPDX-License-Identifier: MIT

import click
import requests
import json
import pygal


def generate_graph(title, data, path, value_text="builds"):
    """
    Generate a treemap from our data
    """
    treemap = pygal.Treemap(
        title=title,
        value_formatter=("{} " + value_text).format,
        truncate_legend=32,
    )

    for name, value in data.items():
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
    response = requests.request(
        method="GET", url="https://prod.packit.dev/api/usage?top=1000&from=1994-01-01"
    )
    result = json.loads(response.content)
    for job_name, job_data in result["jobs"].items():
        job_name_human_readable = (
            job_name.replace("_", " ")
            .capitalize()
            .replace(" Groups", "s")
            .replace(" Targets", "s")
            .replace("Vm", "VM")
            .replace("Tft", "TFT")
            .replace("Srpm", "SRPM")
        )
        click.echo(
            f"""<figure>
    <embed type="image/svg+xml" src="/images/usage/{job_name}.svg" />
</figure>"""
        )
        data = {
            p.removeprefix("https://github.com/"): c
            for p, c in job_data["top_projects_by_job_runs"].items()
        }
        generate_graph(
            f"Packit: {job_name_human_readable}",
            data=data,
            path=f"./static/images/usage/{job_name}.svg",
            value_text=("builds" if "build" in job_name else "runs"),
        )


if __name__ == "__main__":
    generate_usage_treemap()

#!/usr/bin/env python3

# Copyright Contributors to the Packit project.
# SPDX-License-Identifier: MIT

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


if __name__ == "__main__":
    generate_usage_treemap()

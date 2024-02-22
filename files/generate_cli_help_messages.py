#!/usr/bin/python3

import subprocess
import textwrap
import re
from pathlib import Path

HELP_SECTION = "## Help"
HELP_SECTION_REGEX = r"## Help\n([\s\S]*?)(?=\n\n##|\Z)"
FILES_TO_EXCLUDE = ["index.md", "_category_.yaml"]
DOCS_PATH = Path("./docs/cli")


def update_help_message_for_command(doc_file_path, command_name):
    """
    Run packit <command-name> --help and update the content of the
    help section in the given document file.

    Args:
        doc_file_path: path to the documentation file
        command_name: name of the command, e.g. 'build in-copr', 'prepare-sources'
    """
    print(f"Updating message for command {command_name!r} in {doc_file_path!r}")
    with open(doc_file_path, "r") as file:
        file_content = file.read()
        command = ["packit", *command_name.split(), "--help"]
        packit_output = subprocess.run(command, capture_output=True, text=True)
        indented_message = textwrap.indent(packit_output.stdout.strip(), "    ")
        formatted_message = f"{HELP_SECTION}\n\n{indented_message}\n"

        if HELP_SECTION in file_content:
            new_file_content = re.sub(HELP_SECTION_REGEX, formatted_message, file_content, flags=re.DOTALL)
        else:
            new_file_content = f"{file_content}\n{formatted_message}"

        with open(doc_file_path, "w") as updated_file:
            updated_file.write(new_file_content)


def update_help_messages():
    """
    Update help messages for files in docs/cli (including subdirectories) that
    document Packit CLI commands.

    The file names need to correspond to the command names.
    (For subdirectories, '<subdirectory-name> <file-name-without-md>')
    """
    docs_files = [
        file.relative_to(DOCS_PATH)
        for file in DOCS_PATH.rglob("*.md")
        if file.name not in FILES_TO_EXCLUDE
    ]
    for doc_file in docs_files:
        command_name = doc_file.stem
        if "/" in str(doc_file):
            command_name = f"{doc_file.parent.name} {command_name}"

        doc_file_path = DOCS_PATH / doc_file
        update_help_message_for_command(doc_file_path, command_name)


if __name__ == "__main__":
    update_help_messages()

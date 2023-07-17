#!/bin/bash

NUMBER_COMMITS=$1
if [[ -z $NUMBER_COMMITS ]]; then
    echo Specify number of commits to add notes to
    exit 1
fi

set -x

COMMITS=$(git log -$NUMBER_COMMITS --oneline --pretty=format:"%h" | tr " " "\n")

JSON_NOTE='{
    "test": {
        "title": "example glossary",
		"result": "failed",
		"summary": {
            "title": "Something",
            "logs": "path to logs"
        }
    }
}'

cnt=0
for commit in $COMMITS; do
    cnt=$((cnt+1))
    git notes add -f -m "Testing notes ${cnt}\npackit_test=yes" -m "json=${JSON_NOTE}" ${commit}
done

cnt=0
for commit in $COMMITS; do
    cnt=$((cnt+1))
    NOTE=$(git notes show ${commit})
    echo Note is: ${NOTE}
done

COMMIT_2=$(echo ${COMMITS} | cut -d ' ' -f 3)
NOTE2=$(git notes show ${COMMIT_2})

echo "2nd note is ${NOTE2}"

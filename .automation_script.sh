#!/bin/bash

function initialize() {
    first_arg="$1"
    if test -z "$first_arg"; then
        echo "Please provide a file name."
    else
        cd
        message=$(node Documents/Learning/snippets/ProjectBasicSetupAutomation/git_repo_creator.js $1)
        if [[ "$message" == "$1" ]]; then
            echo "$message - repo with the same name already exists."
        else
            cd
            cd Documents/Learning/snippets/
            mkdir $1
            cd $1
            git init
            git remote add origin "$message"
            touch README.md
            git add .
            git commit -m "Intial Commit"
            git push -u origin master
            code .
        fi
    fi
}

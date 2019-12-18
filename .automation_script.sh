#!/bin/bash

function initialize() {
    message=$(node git_scrapper.js $1)
    # echo "$message"
    if [ "$message" == "$1 - repo with the same name already exists." ]
    then
        echo "$message"
    else
        cd
        cd Documents/Learning/snippets/
        # git clone "$message"
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
}
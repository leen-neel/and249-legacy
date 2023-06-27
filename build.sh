#!/bin/bash



# quasar build -m spa
# cd ./dist/spa
# zip -r ../site.zip ./*

# figlet "Site built!"


FILE=./site.zip
if test -f "$FILE"; then
    echo "$FILE exists."
fi

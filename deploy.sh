#!/bin/bash

set -e

BOLD=$(tput -T ansi bold)
NORMAL=$(tput -T ansi sgr0)

help () {
    echo "Helper script to simplify command

Usage: run.sh COMMAND

Commands:
    deploy        Build and synchronize the website
    img           Synchronize source images"
}

case "$1" in

    deploy)
            echo "${BOLD}Run Build project ...${NORMAL}"
            npm run build
            echo "${BOLD}Copy DaLin page into production server...${NORMAL}"
            cd dist/
            rsync -av --delete --exclude='.htaccess' --exclude='.well-known/' -e 'ssh -p 20001' --progress . ssh-731459@dw303.webglobe.com:/home/html/multi_731459/dalin.cz/public_html/
            cd ../../../
            ;;
    img)
        echo "${BOLD}Synchronize DaLin images to production server...${NORMAL}"
        cd images/
        rsync -av --delete -e 'ssh -p 20001' --progress . ssh-731459@dw303.webglobe.com:/home/html/multi_731459/dalin.cz/public_html/images/
        cd ../
        ;;
    help)
        help
        ;;
    *)
        help
        ;;
esac

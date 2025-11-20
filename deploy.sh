#!/bin/bash

set -e

BOLD=$(tput -T ansi bold)
NORMAL=$(tput -T ansi sgr0)

help () {
    echo "Helper script to simplify command

Usage: run.sh COMMAND

Commands:
    img           Copy Imagest to server"
}

case "$1" in

    img)
        echo "${BOLD}Copy DaLin imagest to production server...${NORMAL}"
        cd images/
        rsync -av -e 'ssh -p 20001' --progress . ssh-731459@dw303.webglobe.com:/home/html/multi_731459/dalin.cz/public_html/images
/        cd ../
        ;;
    help)
        help
        ;;
    *)
        help
        ;;
esac
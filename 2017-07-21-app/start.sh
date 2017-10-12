#!/bin/bash

if [[ $# -eq 0 ]] ; then
  (cd admin ; nodemon index.js)
  exit 0
fi

case "$1" in
  1) echo 'you gave 1' ;;
  *) echo 'you gave something else' ;;
esac

#!/bin/bash

# TODO: TODO APPLICATION

case "$1" in
  app) 
    if (cd app ; make) ; then
      ./bin/app
    fi
    ;;
  dev)
    (cd dev ; nodemon .)
    ;;
esac

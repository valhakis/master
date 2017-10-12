#!/bin/bash

# TODO: TODO APPLICATION

case "$1" in
  app) 
    case "$2" in
      run)
        ./bin/app
        ;;
      build) 
        (cd app ; make)
        ;;
      buildnrun) 
        if (cd app ; make) ; then
          ./bin/app
        fi
        ;;
    esac
    ;;
  dev)
    (cd dev ; nodemon .)
    ;;
  *)
    echo "./start.sh [app, dev]"
    ;;
esac

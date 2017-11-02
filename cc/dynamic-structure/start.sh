#!/bin/bash

# mode -> ("app", "exercise")

mode="exercise"

if [[ "$mode" = "app" ]] ; then
  if make app ; then
    ./app
  fi
elif [[ "$mode" = "exercise" ]] ; then
  if make exercise ; then
    ./exercise
  fi
else
  echo "NO SUCH ARGUMENT"
fi


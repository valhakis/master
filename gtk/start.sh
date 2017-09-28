#!/bin/bash

if cmake . ; then
  if make ; then
    gtk
  fi
fi


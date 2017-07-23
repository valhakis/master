#!/bin/bash

clear

if javac -d . App.java Exercise.java Challenge.java Task.java ; then
  java app/App
fi

#!/bin/bash

if javac app/App.java app/Game.java app/Server.java app/Client.java ; then
  # java app/App $@
  # java app/App server
  # java app/App client
  tmux split-window "java app/App server; read"
  tmux split-window "java app/App client; read"
fi

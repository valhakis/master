#!/bin/bash

if [[ $# -eq 0 ]]; then

  (cd win-server ; make)
  (cd win-client ; make)
  (cd client ; make)
  (cd server ; make)
  (cd example ; make)
  (cd glad ; make)
  (cd triangle ; make)

  # ./bin/client
  # wine ./bin/example.exe "one two three"

  # ./bin/client 192.168.0.3 5000 "bash -c 'touch ./bin/example.exe ; ./bin/example.exe'"
  # ./bin/client 192.168.0.3 5000 "bash -c 'touch ./bin/triangle.exe ; ./bin/triangle.exe'"

  # wine ./bin/win-server.exe

  # tmux split-window -v "wine ./bin/win-server.exe ; echo 'ABOUT TO BE CLOSED' ; read"
  # tmux split-window -h "./bin/client 192.168.0.10 5000 ./bin/example.exe ; echo 'ABOUT TO BE CLOSED' ;  read"

  # tmux split-window -v "./bin/server ; echo 'ABOUT TO BE CLOSED' ;  read"
  # tmux split-window -h "wine ./bin/client ; echo 'ABOUT TO BE CLOSED' ; read"

  # tmux split-window -v "wine ./bin/win-server.exe ; echo 'ABOUT TO BE CLOSED' ;  read"
  # tmux split-window -h "wine ./bin/win-client.exe ; echo 'ABOUT TO BE CLOSED' ; read"

  exit
fi

case "$1" in
  clean) 
    (cd win-server ; make clean)
    (cd win-client ; make clean)
    (cd client ; make clean)
    (cd server ; make clean)
    (cd example ; make clean)
    (cd glad ; make clean)
    (cd triangle ; make clean)
    ;;
  *) echo 'no such argument' ;;
esac


#!/bin/bash
if [[ $# -eq 0 ]]; then
  if make ; then
    ../bin/client 192.168.0.3 5000 "bash -c 'clear ; cd bin ; touch * ; ./triangle.exe'"
  fi
fi

#!/bin/bash

ret=$(node main.js)

echo "Return code: '$ret'"

if [ $ret == "true" ]; then
  echo "YOU ARE MOST AWESOME"
else
  echo "YOU ARE NOT MOST AWESOME"
fi

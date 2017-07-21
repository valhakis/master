#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# bash current file name
script_name=`basename "$0"`

SHARE="$DIR/share" node admin 

SHARE="$DIR/share" node server 

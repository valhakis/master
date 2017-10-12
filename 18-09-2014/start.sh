#!/bin/bash

node-gyp configure

(cd build ; make)

node server

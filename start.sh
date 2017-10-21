#!/bin/bash

# (cd 3d ; sudo node .)

# (cd server ; ./start.sh)

sudo systemctl start mongodb
sudo systemctl start httpd
sudo systemctl start mysqld
(cd devserver ; ./start.sh)

#!/bin/bash
sudo systemctl start mongodb
sudo systemctl start httpd
sudo systemctl start mysqld
(cd devserver ; ./start.sh)

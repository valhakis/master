#!/bin/bash
sudo systemctl start mongodb
sudo systemctl start mysqld
# sudo systemctl start httpd
# sudo systemctl restart iptables
#sudo iptables -t nat -A PREROUTING -i wlp3s0f0 -p tcp --dport 3000 -j REDIRECT --to-port 80
# sudo iptables -t nat -A OUTPUT -o lo -p tcp --dport 80 -j REDIRECT --to-port 3000
# sudo iptables -t nat -A PREROUTING -i enp0s25 -p tcp --dport 80 -j REDIRECT --to-port 3000 
(cd devserver ; ./start.sh)

#!/bin/env python

import math
import os
import sys
import tkinter

os.system('clear')

# NOT PYTHON 3
# import Tkinter

root = tkinter.Tk()
root.title("Window")

NEWLINE = "\n"

print("PYTHON VERSION: %s" % sys.version)

RESET = '\033[0;0m'
BOLD = '\033[0;1m'
UNDERLINE = '\033[0;4m'
CROSSED = '\033[0;9m'

BLACK = '\033[0;30m'
RED = '\033[0;31m'
GREEN = '\033[0;32m'
YELLOW = '\033[0;33m'
BLUE = '\033[0;34m'
PURPLE = '\033[0;35m'
CYAN = '\033[0;36m'

IBLACK = '\033[0;90m'
IRED = '\033[0;91m'
IGREEN = '\033[0;92m'
IYELLOW = '\033[0;93m'
IBLUE = '\033[0;94m'
IPURPLE = '\033[0;95m'
ICYAN = '\033[0;96m'

print("%sMATH PI IS %s%f%s" % (IPURPLE, IYELLOW, math.pi, RESET))


sys.stdout.write("%sWRITTEN TO SYSTEM STDOUT%s%s" % (IBLUE, RESET, NEWLINE))

'''
for x in range(39, 200):
    COLOR = "\033[0;%dm" % x
    print("[%sexample%s] number: %s%d%s" % (COLOR, RESET, RED, x, RESET))
    '''

print("%sTHIS MUST BE BOLD%s"       % (BOLD, RESET));
print("%sTHIS MUST BE UNDERLINE%s"  % (UNDERLINE, RESET));
print("%sTHIS MUST BE CROSSED%s"    % (CROSSED, RESET));

print("%sTHIS MUST BE BLACK%s"      % (IBLACK, RESET));
print("%sTHIS MUST BE RED%s"        % (IRED, RESET));
print("%sTHIS MUST BE GREEN%s"      % (IGREEN, RESET));
print("%sTHIS MUST BE YELLOW%s"     % (IYELLOW, RESET));
print("%sTHIS MUST BE BLUE%s"       % (IBLUE, RESET));
print("%sTHIS MUST BE PURPLE%s"     % (IPURPLE, RESET));
print("%sTHIS MUST BE CYAN%s"       % (ICYAN, RESET));

def callback(event):
    print("CLICKED AT -> (%d:%d)" % (event.x, event.y))

def key(event):
    frame.focus_set()
    if (event.char == '\x1b'):
        print("%sESCAPE KEY HAS BEEN PRESSED%s" % (IGREEN, RESET))
        root.destroy()
        root.quit()
    else:
        print("PRESSED AT -> (%d:%d) KEY:" % (event.x, event.y), repr(event.char))

frame = tkinter.Frame(root,  width=800, height=600)
root.bind("<Key>", key)
root.bind("<Button-1>", callback)
frame.pack()

root.mainloop();

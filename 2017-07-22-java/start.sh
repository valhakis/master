#!/bin/bash
clear

if javac -d . Screen.java Game.java ; then
	java sample/Game
fi

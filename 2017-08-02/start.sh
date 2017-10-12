#!/bin/bash

if make ; then
	./app
fi

: <<'comment'
if (cd cpp-program ; make) ; then
	./cpp-program/app
fi
comment

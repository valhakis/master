#ifndef MY_SHARE_H
#define MY_SHARE_H

#include <stdio.h>

namespace share {
	void main(const char *str);
	void print(const char *str);
	void error(const char *str);
	void errorf(const char *format, ...);
	void printf(const char *format, ...);
}

#endif

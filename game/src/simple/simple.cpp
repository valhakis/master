#include <app/simple/simple.h>
#include <stdio.h>
#include <stdarg.h>

void simple::printf (const char *format, ...) {
	va_list args;
	fprintf( stdout, "%sPRINT: %s", KGRN, KNRM);
	va_start( args, format );
	vfprintf( stdout, format, args );
	va_end( args );
	fprintf( stdout, "\n" );
	fprintf(stdout, "%s=====================================%s\n", KMAG, KNRM);
}

void simple::errorf (const char *format, ...) {
	va_list args;
	fprintf( stdout, "%sPRINT: %s", KRED, KNRM);
	va_start( args, format );
	vfprintf( stdout, format, args );
	va_end( args );
	fprintf( stdout, "\n" );
	fprintf(stdout, "%s=====================================%s\n", KMAG, KNRM);
}

namespace simple {
	void cprintf (const char *COLOR, const char *format, ...) {
		va_list args;
		fprintf( stdout, "%sPRINT: %s", COLOR, KNRM);
		va_start( args, format );
		vfprintf( stdout, format, args );
		va_end( args );
		fprintf( stdout, "\n" );
		fprintf(stdout, "%s=====================================%s\n", KMAG, KNRM);
	}
};


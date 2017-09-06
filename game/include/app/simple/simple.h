#ifndef MY_SIMPLE_H
#define MY_SIMPLE_H
namespace simple {

	class vec3 {
		public:
		protected:
		private:
	};

	class vertex {
		public:
		protected:
		private:
	};

	const char * const KNRM = "\x1B[0m";
	const char * const KRED = "\x1B[31m";
	const char * const KGRN = "\x1B[32m";
	const char * const KYEL = "\x1B[33m";
	const char * const KBLU = "\x1B[34m";
	const char * const KMAG = "\x1B[35m";
	const char * const KCYN = "\x1B[36m";
	const char * const KWHT = "\x1B[37m";

	void printf (const char *format, ...);
	void errorf (const char *format, ...);
	void cprintf (const char *COLOR, const char *format, ...);
}

#endif

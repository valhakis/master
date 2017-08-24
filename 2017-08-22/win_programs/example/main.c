#include <stdio.h>
#include <dos.h>
#include <conio.h>

int initmouse();

// union REGS i;
// union REGS o;

int main()
{
	puts("APPLICATION MAIN ENTRY");

	int status;

	status = initmouse();

	if (status == 0)
		puts("MOUSE SUPPORT NOT AVAILABLE");
	else
		puts("MOUSE SUPPORT AVAILABLE");

	puts("PRESS ANY KEY TO CONTINUE");
	getch();
	puts("APPLICATION MAIN EXIT");
	return 0;
}

int initmouse()
{
	// i.x.ax = 0;
	// int86(0X33, &i, &o);
	//return (o.x.ax);
}

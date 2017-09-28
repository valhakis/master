#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define KNRM  "\x1B[0m"
#define KRED  "\x1B[31m"
#define KGRN  "\x1B[32m"
#define KYEL  "\x1B[33m"
#define KBLU  "\x1B[34m"
#define KMAG  "\x1B[35m"
#define KCYN  "\x1B[36m"
#define KWHT  "\x1B[37m"

int main(int argc, char *argv[])
{
	if (argc < 2) {
		char command[512];
		sprintf(command, "start cmd /k %s run", argv[0]);

		system(command);
		return 0;
	}

	puts(argv[0]);
	int num_wrong_answers = 0;

	setbuf(stdout, NULL);
	char line[512];

	FILE *fp;

	fp = fopen("data/data.txt", "r");

	while (fgets(line, 512, fp)) {
		if (strcmp(line, "\n") == 0) continue;

		char question[512], answer[512], your_answer[512];

		if (strncmp(line, "Question: ", 10) == 0) {
			memcpy(question, &line[10], 512);
		}

		fgets(line, 512, fp);
		if (strncmp(line, "Answer: ", 8) == 0) {
			memcpy(answer, &line[8], 512);
		}

		question[strlen(question)-1] = '\0';
		answer[strlen(answer)-1] = '\0';

		printf("Q: %s%s%s\n", KCYN, question, KNRM);
		printf("Answer: ");

		fgets(your_answer, 512, stdin);
		your_answer[strlen(your_answer)-1] = '\0';

		if (strcmp(answer, your_answer) == 0) {
			printf("%sGREAT SUCCESS%s\n", KGRN, KNRM);
		} else {
			printf("%sGREAT FAILURE%s, Right answer was: '%s%s%s'%s.\n", KRED, KNRM, KYEL, answer, KNRM, KNRM);
			num_wrong_answers += 1;
		}

	}

	printf("Number of wrong answers was: %s%d%s.\n", num_wrong_answers > 0 ? KRED : KGRN, num_wrong_answers, KNRM);

	fclose(fp);

	return 0;
}

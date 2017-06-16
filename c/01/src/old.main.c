#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define BUFFER_SIZE 10
#define WORD_SIZE 24

void write_to_file(const char *s);
void replace_word(const char *s);
void clear(void);

int main(void){
  const char file_name[] = "text.txt";
  int c;
  puts("Enter 'w' to write to the file, 'r' to replace a word");
  while((c = getchar()) != EOF){
    switch(c){
      case 'w':
        clear();
        write_to_file(file_name);
        break;
      case 'r':
        clear();
        replace_word(file_name);
        break;
      default:
        clear();
        printf("Invalid command:%c\n", c);
        break;
    }
    puts("Enter 'w' to write to the file, 'r' to replace a word");
  }
  return 0;
}

void write_to_file(const char *s){
  puts("Enter input:");
  FILE *in_file;
  if((in_file = fopen(s, "w")) == NULL){
    perror(s);
    exit(EXIT_FAILURE);
  }

  int c;
  while((c = getchar()) != EOF){
    fputc(c, in_file);
  }

  fclose(in_file);
  puts("Successfully written to the file");
}

void replace_word(const char *s){
  char old_word[WORD_SIZE];
  char new_word[WORD_SIZE];

  puts("Enter the word you want to replace");
  fgets(old_word, sizeof(old_word), stdin);
  old_word[strlen(old_word) - 1] = '\0';
  puts("Enter the new word");
  fgets(new_word, sizeof(new_word), stdin);
  new_word[strlen(new_word) - 1]  = '\0';

  if(strlen(old_word) != strlen(new_word)){
    fprintf(stderr, "Error: can't replace \"%s\" with \"%s\":\nThe length is not the same\n", old_word, new_word);
    return;
  }
  FILE *original_file;
  FILE *copy;

  if((original_file = fopen(s, "r")) == NULL){
    perror(s);
    exit(EXIT_FAILURE);
  }

  if((copy = fopen("copy.txt", "w")) == NULL){
    perror("text");
    exit(EXIT_FAILURE);
  }

  char *buffer = malloc(BUFFER_SIZE);
  int word_len = strlen(old_word);
  int word_frequency = 0;

  while(fgets(buffer, BUFFER_SIZE, original_file)){
    char *init_loc = buffer;
    while((buffer = strstr(buffer, old_word))){
      memcpy(buffer, new_word, word_len);
      word_frequency++;
    }
    buffer = init_loc;
    fputs(buffer, copy);
    if(!strchr(buffer, '\n')){
      fseek(original_file, -(word_len), SEEK_CUR);
    }
  }

  printf("'%s' found %i times\n", old_word, word_frequency);

  fclose(original_file);
  fclose(copy);

  if((original_file = fopen(s, "w")) == NULL){
    perror(s);
    exit(EXIT_FAILURE);
  }

  if((copy = fopen("copy.txt", "r")) == NULL){
    perror("text");
    exit(EXIT_FAILURE);
  }

  int c;
  while((c = fgetc(copy)) != EOF){
    fputc(c, original_file);
  }

  fclose(original_file);
  fclose(copy);
  remove("copy.txt");
  free(buffer);

  if(word_frequency > 0){
    puts("Word replaced successfully");
  }
  else{
    puts("No words were replaced");
  }
}

void clear(void){
  int c;
  while((c = getchar()) != '\n' && (c != EOF));
}

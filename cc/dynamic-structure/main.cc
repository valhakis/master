#include <stdio.h>
#include <malloc.h>
#include <stdbool.h>
#include <ctype.h>

typedef struct listelement listelement;

struct listelement {
  int dataitem;
  listelement *link;
};

void Menu(int *choice);
listelement *AddItem(listelement *listpointer, int data);
listelement *RemoveItem(listelement *listpointer);
void PrintQueue(listelement *listpointer);
void ClearQueue(listelement *listpointer);

int main() {

  listelement listmember, *listpointer;
  int data, choice;

  listpointer = NULL;
  do {
    Menu (&choice);
    switch (choice) {
      case 1:
        printf("Enter data item value to add: ");
        scanf("%d", &data);
        listpointer = AddItem(listpointer, data);
        break;
      case 2:
        if (listpointer == NULL) {
          printf("Queue empty!\n");
        } else {
          listpointer = RemoveItem(listpointer);
        }
        break;
      case 3:
        PrintQueue(listpointer);
        break;
      case 4:
        break;
      default:
        printf("Invalid menu choice - try again.\n");
        break;
    }
  } while (choice != 4);

  ClearQueue(listpointer);
  return 0;
}

void Menu(int *choice) {
  char local;
  printf("\nENTER \t1 - to add\n"
      "\t2 - to remove\n"
      "\t3 - to print\n"
      "\t4 - to quit\n"
      );
  do {
    local = getchar();
    if ((isdigit(local) == false) && (local != '\n')) {
      printf("You must enter an integer.\n");
      printf("Enter 1 to add, 2 to remove, 3 to print, 4 to quit.\n");
    }
  } while (isdigit((unsigned char)local) == false);
  *choice = (int) local - '0';
}

listelement *AddItem(listelement *listpointer, int data) {
  listelement *lp = listpointer;

  if (listpointer != NULL) {
    while (listpointer->link != NULL) {
      listpointer = listpointer->link;
    }
    listpointer->link = (struct listelement *)malloc(sizeof(listelement));
    listpointer = listpointer->link;
    listpointer->link = NULL;
    listpointer->dataitem = data;
    return lp;
  } else {
    listpointer = (struct listelement *)malloc(sizeof(listelement));
    listpointer->link = NULL;
    listpointer->dataitem = data;
    return listpointer;
  }
}

listelement *RemoveItem(listelement *listpointer) {
  listelement *tempp;
  printf("Element removed is %d.\n", listpointer->dataitem);
  tempp = listpointer->link;
  free(listpointer);
  return tempp;
}

void PrintQueue(listelement *listpointer) {
  if (listpointer == NULL) {
    printf("Queue is empty!\n");
  } else {
    while (listpointer != NULL) {
      printf("%d\t", listpointer->dataitem);
      listpointer = listpointer->link;
    }
    printf("\n");
  }
}

void ClearQueue(listelement *listpointer) {
  while (listpointer != NULL) {
    listpointer = RemoveItem(listpointer);
  }
}

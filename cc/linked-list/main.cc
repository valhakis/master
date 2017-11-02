// http://www.zentut.com/c-tutorial/c-linked-list/
#include <stdio.h>
#include <stdlib.h>

// head -> 4 -> 3 -> 2 -> 1 -> NULL

typedef struct node node;
struct node {
  int data;
  struct node* next;
};

typedef void (*callback)(node *data);

node* create(int data, node* next) {
  node* newnode = (node*)malloc(sizeof(node));
  newnode->data = data;
  newnode->next = next;

  return newnode;
}

node* prepend(node *head, int data) {
  node* newnode = create(data, head);
  head = newnode;
  return head;
}

void menu() {
  printf("---- C Linked List Demonstration ---- \n\n");
  printf("0 - menu\n");
  printf("1 - prepend an element\n");
  printf("2 - append an element\n");
  printf("3 - search for an element\n");
  printf("4 - insert after an element\n");
  printf("5 - insert before an element\n");
  printf("6 - remove front node\n");
  printf("7 - remove back node\n");
  printf("8 - remove any node\n");
  printf("s - sort the list\n");
  printf("r - reverse the list\n");
  printf("q - quit\n");
}

void traverse(node *head, callback f) {
  node *cursor = head;
  while (cursor != NULL) {
    f(cursor);
    cursor = cursor->next;
  }
}

void display(node *n) {
  if (n != NULL) {
    printf("%d ", n->data);
  }
}

node *append(node* head, int data) {
  if (head == NULL)
    return NULL;

  /* goes to the last node */
  node *cursor = head;
  while (cursor->next != NULL)
    cursor = cursor->next;

  /* creates a new node */
  node* newnode = create(data, NULL);
  cursor->next = newnode;

  return head;
}

int main() {
  bool open = true;
  int data;
  char command = '0';
  node *head = NULL, *tmp = NULL;
  callback disp = display;

  menu();
  while (open) {
    printf("\ncommand: ");
    scanf("%c", &command);
    switch (command) {
      case 'q': 
        open = false;
        break;
      case '1': 
        printf("number to prepend: ");
        scanf("%d", &data);
        head = prepend(head, data);
        traverse(head, disp);
        break;
      case '2':
        printf("number to append: ");
        scanf("%d", &data);
        head = append(head, data);
        traverse(head, disp);
        break;
    }
  }

  return 0;
}

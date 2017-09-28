#include <string.h>
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>
#include <unistd.h>

#include <sys/types.h>
#include <sys/socket.h>

#include <netinet/in.h>
#include <arpa/inet.h>

#include "world.h"

#define BUF_LEN 512

int check;

char buffer[BUF_LEN];

char command[BUF_LEN];

struct {
  int port;
  char host[100];
  struct sockaddr_in addr;
} server;

struct {
  int socket;
} client;

int main(int argc, char *argv[])
{
  setbuf(stdout, NULL);

  int open = true;

  server.port = 5000;
  strcpy(server.host, "192.168.0.3");

  if (argc < 3) 
  {
    return error("use: client [host] [port] [command]");
  } else {
    strcpy(server.host, argv[1]);
    server.port = atoi(argv[2]);
    strcpy(command, argv[3]);
  }

  /*
  int check = WSAStartup(MAKEWORD(2, 2), &wsa);

  if (check != 0)
  {
    return error("startup %d", WSAGetLastError());
  }
  */

  client.socket = socket(AF_INET, SOCK_STREAM, 0);

  if (client.socket < 0)
  {
    return error("socket");
  }

  server.addr.sin_addr.s_addr = inet_addr(server.host);
  server.addr.sin_family = AF_INET;
  server.addr.sin_port = htons(server.port);

  check = connect(client.socket, (struct sockaddr *)&server.addr, sizeof(server.addr));

  if (check < 0)
  {
    return error("connect");
  }

  //printf("to server: ");
  // fgets(buffer, BUF_LEN, stdin);
  //buffer[strlen(buffer)-1] = '\0';
  // strcpy(buffer, program);

  if (strcmp(buffer, "exit") == 0) {
    open = false;
  }

  // sprintf(buffer, "message from client");
  check = send(client.socket, command, strlen(command), 0);

  if (check < 0)
  {
    return error("send");
  }

  check = recv(client.socket, buffer, BUF_LEN -1, 0);
  buffer[check] = '\0';

  if (check < 0)
  {
    return error("recv");
  }

  printf("server: %s.\n", buffer);

  close(client.socket);

  return 0;
}

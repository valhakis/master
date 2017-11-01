#include <stdio.h>
#include <stdbool.h>
#include <unistd.h>
#include <stdlib.h>
#include <string.h>

#include <sys/types.h>
#include <sys/socket.h>

#include <netinet/in.h>

#include "world.h"

int open = true;

int check;

#define BUF_LEN 512
char buffer[BUF_LEN];

struct {
  int port;
  int socket;
  struct sockaddr_in addr;
} server;

struct {
  int len;
  int socket;
  struct sockaddr_in addr;
} client;

int main()
{
  server.port = 5000;

  server.socket = socket(AF_INET, SOCK_STREAM, 0);

  if (server.socket < 0)
  {
    return error("socket");
  }

  int enable = 1;
  check = setsockopt(server.socket, SOL_SOCKET, SO_REUSEADDR, &enable, sizeof(int));
  
  if (check < 0)
  {
    return error("set option SO_REUSEADDR");
  }

  bzero(&server.addr, sizeof(server.addr));

  server.addr.sin_family = AF_INET;
  server.addr.sin_addr.s_addr = INADDR_ANY;
  server.addr.sin_port = htons(server.port);

  check = bind(server.socket, (struct sockaddr *)&server.addr, sizeof(server.addr));

  if (check < 0) 
  {
    return error("bind");
  }

  listen(server.socket, 5);

  client.len = sizeof(client.addr);

  print("Waiting for connections.");
  client.socket = accept(server.socket, (struct sockaddr *)&client.addr, &client.len);

  if (client.socket < 0)
  {
    return error("accept");
  }

  while (open)
  {
    bzero(buffer, BUF_LEN);

    check = read(client.socket, buffer, BUF_LEN - 1);

    if (check < 0)
    {
      return error("read");
    }

    if (strcmp(buffer, "exit") == 0) {
      open = false;
    }

    printf("client: %s.\n", buffer);

    sprintf(buffer, "me is server");
    check = write(client.socket, buffer, strlen(buffer));

    if (check < 0) 
    {
      return error("write");
    }
  }

  close(client.socket);
  close(server.socket);

  return 0;
}

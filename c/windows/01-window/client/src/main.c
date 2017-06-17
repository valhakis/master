#include <stdio.h>
#include <string.h>
#include <unistd.h>
#include <stdlib.h>

#include <netdb.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>

// send 'run' to socket server

const char *SERVER_IP = "192.168.0.30";
const unsigned int SERVER_PORT = 5000;

int main()
{
  printf("Starting to connect to %s:%d.\n", SERVER_IP, SERVER_PORT);
  int _socket, ret;
  struct sockaddr_in serv_addr;
  struct hostent *server;
  char buffer[512];

  /* create new socket */
  _socket = socket(AF_INET, SOCK_STREAM, 0);

  if (_socket < 0)
  {
    printf("Failed to create socket.\n");
    return -1;
  }

  /* get server information by ip and set up serv_addr */
  server = gethostbyname(SERVER_IP);

  if (server == NULL)
  {
    printf("Failed to get host with IP: %s.\n", SERVER_IP);
    return -1;
  }

  bzero((char *)&serv_addr, sizeof(serv_addr));

  serv_addr.sin_family = AF_INET;
  bcopy((char *)server->h_addr, (char *)&serv_addr.sin_addr.s_addr, server->h_length);
  serv_addr.sin_port = htons(SERVER_PORT);

  /* connect to server */
  ret = connect(_socket, (struct sockaddr *)&serv_addr, sizeof(serv_addr));

  if (ret < 0)
  {
    printf("Failed to connect to server. [%s]\n", SERVER_IP);
    return -1;
  }

  strcpy(buffer, "run");
  ret = write(_socket, buffer, strlen(buffer));
  if (ret < 0)
  {
    printf("Unable to write to socket.\n");
    return -1;
  }

  close(_socket);
  return 0;
}

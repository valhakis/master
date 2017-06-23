#include <stdio.h>
#include <unistd.h>
#include <string.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <netdb.h>
#include "inc/functions.h"
#include <sys/socket.h> 

int SendCommand(const char * ServerIp, unsigned int ServerPort, const char *command)
{
  int sock, ret;
  struct hostent *server;
  struct sockaddr_in serv_addr;

  /* create socket */
  sock = socket(AF_INET, SOCK_STREAM, 0);
  if (sock < 0) error("Unable to create socket.\n");

  /* setup serv_addr */
  server = gethostbyname(ServerIp);
  if (server == NULL) error("Failed to get host: '%s'.\n", ServerIp);
  bzero((char*)&serv_addr, sizeof(serv_addr));
  serv_addr.sin_family = AF_INET;
  bcopy((char*)server->h_addr, (char*)&serv_addr.sin_addr.s_addr, server->h_length);
  serv_addr.sin_port = htons(ServerPort);

  /* connect to server */
  ret = connect(sock, (struct sockaddr*)&serv_addr, sizeof(serv_addr));
  if (ret < 0) error("Unable to connect to server '%s'.\n", ServerIp);

  /* send command to server */
  ret = write(sock, command, strlen(command));
  if (ret < 0) error("Unable to write to socket.\n");

  /* close the socket */
  close(sock);
}

int main(int argc, char *argv[])
{
  char *executable = GetExecutable(argc, argv);

  SendCommand("192.168.0.30", 5000, executable);

  printf("Executable: %s.\n", executable);
  return 0;
}

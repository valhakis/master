#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>
#include <string.h>
#include <stdlib.h>
#include <valhakis.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <netdb.h> 

const int port = 2000;
const char *host = "192.168.0.3";

int main(int argc, char *argv[])
{
  int sockfd, portno, n;

  struct sockaddr_in serv_addr;
  struct hostent *server;

  char buffer[256];
  sockfd = socket(AF_INET, SOCK_STREAM, 0);
  if (sockfd < 0) {
    ValErr("Failed opening socket");
    return -1;
  }
  server = gethostbyname(host);
  if (server == NULL) {
    ValErr("Failed, no such host\n");
    return -1;
  }
  bzero((char *) &serv_addr, sizeof(serv_addr));
  serv_addr.sin_family = AF_INET;
  bcopy((char *)server->h_addr, (char *)&serv_addr.sin_addr.s_addr, server->h_length);
  serv_addr.sin_port = htons(port);
  if (connect(sockfd,(struct sockaddr *)&serv_addr,sizeof(serv_addr)) < 0) {
    ValErr("Failed connecting");
    return 0;
  }
  printf("Please enter the message: ");
  bzero(buffer,256);
  fgets(buffer,255,stdin);
  n = write(sockfd,buffer,strlen(buffer));
  if (n < 0) {
    ValErr("Failed writing to socket");
    return 0;
  }
  bzero(buffer,256);
  n = read(sockfd,buffer,255);
  if (n < 0) {
    ValErr("Failed reading from socket");
    return 0;
  }
  printf("%s\n",buffer);
  return 0;
}

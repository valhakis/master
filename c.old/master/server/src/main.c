#include <stdio.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <string.h>
#include <unistd.h>
#include <valhakis.h>

const int port = 2000;

int main(int argc, char *argv[])
{
  int sockfd, newsockfd, clilen;
  char buffer[512];
  struct sockaddr_in serv_addr, cli_addr;

  sockfd = socket(AF_INET, SOCK_STREAM, 0);

  if (sockfd < 0) 
  {
    ValErr("Failed to create socket.");
    return -1;
  }

  bzero((char *)&serv_addr, sizeof(serv_addr));
  serv_addr.sin_family = AF_INET;
  serv_addr.sin_addr.s_addr = INADDR_ANY;
  serv_addr.sin_port = htons(port);

  if (bind(sockfd, (struct sockaddr *)&serv_addr, sizeof(serv_addr)) < 0) 
  {
    ValErr("Failed to bind.");
    return -1;
  }

  listen(sockfd, 5);
  clilen = sizeof(cli_addr);

  ValLog("Waiting for connections.");
  newsockfd = accept(sockfd, (struct sockaddr *)&cli_addr, &clilen);
  if (newsockfd < 0) {
    ValErr("Failed to accept.");
    return -1;
  }
  bzero(buffer, 512);
  if (read(newsockfd, buffer, 512) < 0) {
    ValErr("Failed to read.");
    return -1;
  }
  printf("Message: %s.\n", buffer);
  bzero(buffer, 512);
  sprintf(buffer, "I AM UR GOD");
  if (write(newsockfd, buffer, strlen(buffer)) < 0) {
    ValErr("Failed to write to socket.");
    return -1;
  }

  close(sockfd);
  close(newsockfd);

  return 0;
}

#ifdef linux
#include <net/if.h>
#include <string.h>
#include <sys/ioctl.h>
#include <unistd.h>
#include <stropts.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <sys/types.h>

char *LinGetIP(const char *interface)
{
  int fd;
  struct ifreq ifr;
  fd = socket(AF_INET, SOCK_DGRAM, 0);

  strncpy(ifr.ifr_name, interface, IFNAMSIZ-1);
  ioctl(fd, SIOCGIFADDR, &ifr);

  close(fd);

  ifr.ifr_addr.sa_family = AF_INET;
  char *ip = inet_ntoa(((struct sockaddr_in*)&ifr.ifr_addr)->sin_addr);

  return ip;
}
#endif

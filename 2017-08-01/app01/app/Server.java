package app;

import java.net.*;
import java.io.*;

public class Server extends Thread {
  private ServerSocket socket;

  public Server(int port) throws IOException {
    System.out.println("Server has been initialized.");

    socket = new ServerSocket(port);
    socket.setSoTimeout(10_000);
  }

  public void run() {
    while (true) {
      try {
        int port = socket.getLocalPort();
        System.out.printf("Waiting for client to connect, on port %d.\n", port);

        Socket server = socket.accept();
        System.out.printf("Connected: %d.\n", port);

        DataInputStream in = new DataInputStream(server.getInputStream());

        System.out.println(in.readUTF());
        DataOutputStream out = new DataOutputStream(server.getOutputStream());
        out.writeUTF("Thank you for connecting to " + port + ".");
        server.close();

      } catch(SocketTimeoutException exception) {
        System.out.println("Socket has timed out.");
        break;
      } catch (IOException exception) {
        exception.printStackTrace();
        break;
      }
    }
  }
}

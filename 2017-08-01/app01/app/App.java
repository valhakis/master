package app;

import java.net.*;
import java.io.*;

public class App {

  public void arguments(String[] args) {

    for (int i=0; i<args.length; i++) {
      System.out.println(args[i]);
    }

  }

  public static void main(String[] args) {

    App app = new App();

    // app.arguments(args);

    /* when no arguments, start game */
    if (args.length == 0) {
      Game game = new Game();

    } else if (args.length == 1) { /* 1 argument only */

      if (args[0].equals("server")) { /* argument equals 'server' */
        try {

          Thread server = new Server(5000);

          server.start();

        } catch (IOException exception) {
          exception.printStackTrace();
        }
      } else if (args[0].equals("client")) { /* when argument equals 'client' */
        Client client = new Client();
      }
    }
  }
}

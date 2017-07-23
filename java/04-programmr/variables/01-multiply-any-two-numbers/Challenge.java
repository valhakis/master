package app;

import java.util.Scanner;
class Challenge{
  Scanner scanner=new Scanner(System.in);

  public void start() {
    int product=0;

    System.out.println("Enter the 1st number:");
    int num1=scanner.nextInt();
    System.out.println("Enter the 2nd number:");
    int num2=scanner.nextInt();

    ///{ write your code here

    product = num1 * num2;

    ///}

    System.out.println("The product of the two numbers is:"+product); 
  }
}

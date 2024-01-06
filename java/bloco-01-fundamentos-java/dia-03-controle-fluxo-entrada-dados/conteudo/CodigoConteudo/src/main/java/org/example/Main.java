package org.example;

import org2.example2.Code;

public class Main {

  public static void main(String[] args) {

    Code code = new Code();
    code.setMediaFinal(5);
    code.setResultado();
    System.out.println(code.getResultado());
  }
}
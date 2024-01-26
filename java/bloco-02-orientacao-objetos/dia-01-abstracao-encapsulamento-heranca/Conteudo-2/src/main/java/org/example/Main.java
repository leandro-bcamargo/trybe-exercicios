package org.example;

public class Main {

  public static void main(String[] args) {
    Carro carro1 = new Carro("Hyundai", "HB20", 2022);
    Carro carro2 = new Carro("Fiat", "Palio", 2000);
    Carro carro3 = new Carro("Chevrolet", "Monza", 2010);
    carro1.exibirInformacoes();
    carro2.exibirInformacoes();
    carro3.exibirInformacoes();
    carro1.quantidadeDeCarros();
  }
}
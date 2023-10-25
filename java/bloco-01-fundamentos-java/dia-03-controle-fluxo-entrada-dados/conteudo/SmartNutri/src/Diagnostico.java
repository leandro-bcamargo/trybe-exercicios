import java.util.Scanner;

public class Diagnostico {

  public static void main(String[] args) {
    Avaliacao avaliacao = new Avaliacao();
    Scanner scanner = new Scanner(System.in);
    System.out.println("Qual seu peso?");
    String pesoEntrada = scanner.nextLine();
    System.out.println("Qual sua altura?");
    String alturaEntrada = scanner.nextLine();
    System.out.println("Peso: " + pesoEntrada + "; " + "Altura: " + alturaEntrada);
    double peso = Double.parseDouble(pesoEntrada);
    double altura = Double.parseDouble(alturaEntrada);
    avaliacao.calcularIMC(peso, altura);
    scanner.close();
  }
}

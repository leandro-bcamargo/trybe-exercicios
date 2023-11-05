public class Main {

  public static void main(String[] args) {
    Carro carro = new Carro("Creta", "Hyundai", 2021);

    System.out.println("O nome do carro é: " + carro.getNome());
    System.out.println("A montadora do carro é: " + carro.getMontadora());
    System.out.println("O ano do carro é: " + carro.getAno());
  }
}

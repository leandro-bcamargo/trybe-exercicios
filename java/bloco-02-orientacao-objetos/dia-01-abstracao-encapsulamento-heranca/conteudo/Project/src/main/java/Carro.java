public class Carro {
  private String nome;
  private String montadora;
  private int ano;

  public String getNome() {
    return nome;
  }

  public String getMontadora() {
    return montadora;
  }

  public int getAno() {
    return ano;
  }

  public Carro(String nome, String montadora, int ano) {
    this.nome = nome;
    this.montadora = montadora;
    this.ano = ano;
  }
}

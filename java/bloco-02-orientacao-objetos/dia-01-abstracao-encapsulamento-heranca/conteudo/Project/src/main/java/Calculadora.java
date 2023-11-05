public class Calculadora {
    private int primeiroNumero;
    private int segundoNumero;

    public int somar() {
      int resultado = primeiroNumero + segundoNumero;
      return resultado;
    }

    public int subtrair() {
      int resultado = primeiroNumero - segundoNumero;
      return resultado;
    }

    public int multiplicar() {
      int resultado = primeiroNumero * segundoNumero;
      return resultado;
    }

    public int dividir() {
      int resultado = primeiroNumero / segundoNumero;
      return resultado;
    }
  }

}

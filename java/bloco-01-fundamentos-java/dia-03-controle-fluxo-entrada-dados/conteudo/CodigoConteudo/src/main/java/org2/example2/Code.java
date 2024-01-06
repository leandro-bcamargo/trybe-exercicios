package org2.example2;

public class Code {
  double mediaFinal = 7.5;
  String resultado = "INDEFINIDO";

  public double getMediaFinal() {
    return mediaFinal;
  }

  public void setMediaFinal(double mediaFinal) {
    this.mediaFinal = mediaFinal;
  }

  public String getResultado() {
    return this.resultado;
  }

  public void setResultado() {
    if (this.mediaFinal >= 7) {
      this.resultado = "APROVADA";
    } else if (this.mediaFinal >= 6) {
      this.resultado = "REALIZAR PROVA BONUS";
    } else {
      this.resultado = "REPROVADA";
    }
  }
}

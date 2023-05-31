class Student {
  private _matricula: string;
  private _nome: string;
  private _notasProva: number[] = [];
  private _notasTrabalho: number[] = [];

  constructor(matricula: string, nome: string, notasProva: number[], notasTrabalho: number[]) {
    this._matricula = matricula;
    this._nome = nome;
    this.notasProva = notasProva;
    this.notasTrabalho = notasTrabalho;
  }

  get notasProva(): number[] {
    return this._notasProva;
  }

  get notasTrabalho(): number[] {
    return this._notasTrabalho;
  }

  set notasProva(newNotas: number[]) {
    if (newNotas.length !== 4) throw new Error('Deve haver 4 notas de prova');
    this._notasProva = newNotas;
  }

  set notasTrabalho(newNotas: number[]) {
    if (newNotas.length !== 2) throw new Error('Deve haver 2 notas de trabalho');
    this._notasTrabalho = newNotas;
  }

  somaNotas(): number {
    return [...this.notasProva, ...this.notasTrabalho].reduce((acc, curr) => acc + curr, 0);
  }

  mediaNotas(): number {
    return this.somaNotas() / [...this.notasProva, this.notasProva].length;
  }

}

try {
  const student1 = new Student('1234', 'Leandro', [1, 2, 3, 4], [5, 7]);
  console.log(student1.somaNotas());
  console.log(student1.mediaNotas());
} catch (error: any) {
  console.log(error.message);
}
class Estudante {
  private _matricula: string;
  private _nome: string;
  private _notasProva: number[];
  private _notasTrabalho: number[];

  constructor(matricula: string, nome: string, notasProva: number[], notasTrabalho: number[]) {
    this._matricula = matricula;
    this._nome = nome;
    this._notasProva = notasProva;
    this._notasTrabalho = notasTrabalho;
  }

  get notasProva() { return this._notasProva };
  get notasTrabalho() { return this._notasTrabalho };

  somaNotas(): number {
    const allGrades = [...this.notasProva, ...this.notasTrabalho];
    const total = allGrades.reduce((total, nota) => total + nota);
    return total;
  }

  mediaNotas(): number {
    const allGrades = [...this.notasProva, ...this.notasTrabalho];
    const average = this.somaNotas() / allGrades.length;
    return average;
  }
}

const student = new Estudante('123', 'leandro', [1, 3, 6, 9], [5, 6]);
console.log(student.mediaNotas());
console.log(student.somaNotas());
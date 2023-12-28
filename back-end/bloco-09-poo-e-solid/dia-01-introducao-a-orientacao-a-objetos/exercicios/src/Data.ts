export default class Data {
  private _data: Date;
  
  constructor(private _dia: string, private _mes: string, private _ano: string) {
    this._data = this.getDate();
  }
  
  public get data(): Date {
    return this._data;
  }

  public set data(value: Date) {
    this._data = value;
  }

  public get ano(): string {
    return this._ano;
  }
  public set ano(value: string) {
    this._ano = value;
  }
  public get mes(): string {
    return this._mes;
  }
  public set mes(value: string) {
    this._mes = value;
  }
  public get dia(): string {
    return this._dia;
  }
  public set dia(value: string) {
    this._dia = value;
  }

  getDate() {
    const dataStr = `${this.ano}-${this.mes}-${this.dia}`;
    const date = new Date(dataStr);
    if (isNaN(date.getTime())) {
      return new Date('1900-01-01');
    }
    return date;
  }

  getMonthName() {
    return this.getDate().toLocaleString('default', {month: 'long'});
  }

  isLeapYear() {
    return new Date(Number(this.ano), 1, 29).getMonth() === 1;
  }

  compare(data: Date) {
    const currDate = new Date();
    if (currDate > data) return 1;
    else if (currDate < data) return -1;
    return 0;
  }

  format(formatting: string) {
    const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    let day = this.getDate().getDate().toString().padStart(2, '0');
    let month = (this.getDate().getMonth() + 1).toString().padStart(2, '0');
    let year = this.getDate().getFullYear();

    switch(formatting) {
      case 'dd/mm/aaaa':
        return `${day}/${month}/${year}`;
      case 'aaaa-mm-dd':
        return `${year}-${month}-${day}`;
      case 'dd de M de aa':
        return `${day} de ${months[this.getDate().getMonth()]} de ${year.toString().slice(-2)}`;
      case 'dd, M de aaaa':
        return `${day}, ${months[this.getDate().getMonth()]} de ${year}`
    }
  }
}

const date1 = new Data('1', '1', '2000');
const date2 = new Data('32', '1', '1500');

console.log(date1.getDate())
console.log(date1.getMonthName())
console.log(date1.isLeapYear())
console.log(date1.compare(new Date(2000, 1, 1)))
console.log(date1.compare(new Date(2024, 1, 1)))
console.log(date1.compare(new Date()))
console.log(date1.format('dd/mm/aaaa'))
console.log(date1.format('aaaa-mm-dd'))
console.log(date1.format('dd de M de aa'))
console.log(date1.format('dd, M de aaaa'))
console.log(date2.getDate())
console.log(date2.getMonthName())
console.log(date2.isLeapYear())

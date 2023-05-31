export default class Data {
  private _day: number = 0;
  private _month: number = 0;
  private _year: number = 0;

  constructor(day: number, month: number, year: number) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  get day() {
    return this._day;
  };

  get month() {
    return this._month;
  }

  get year() {
    return this._year;
  }

  set day(newDay: number) {
    this._day = newDay;
  }

  set month(newMonth: number) {
    this._month = newMonth;
  };

  set year(newYear: number) {
    this._year = newYear;
  };
}
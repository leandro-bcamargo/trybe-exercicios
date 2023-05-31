interface House {
  _owner: string;
  _address: string;
  _color: string;
  _area: number;
}

class House {
  constructor(owner: string, address: string, color: string, area: number) {
    this._owner = owner;
    this._address = address;
    this._color = color;
    this._area = area;
  }
}
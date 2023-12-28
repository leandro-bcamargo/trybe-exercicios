class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
    this.connectedTo = "HDMI";
  }

  set connectedTo(newValue: string | undefined) {
    if (newValue && this._connections.includes(newValue)) {
      this.connectedTo = newValue;
    } else {
      console.log("Sorry, connection unavailable!")
    }
  }

  get connectedTo(): string | undefined {
    return this._connectedTo;
  }



  turnOn() {
    console.log(
    `Brand: ${this._brand}
    Size: ${this._size}
    Resolution: ${this ._resolution}
    Connections: ${this._connections}
    ConnectedTo: ${this.connectedTo}
    `)
  }
}

const tv = new Tv('Samsung', 50, '1600x900', ['HDMI']);
tv.turnOn();
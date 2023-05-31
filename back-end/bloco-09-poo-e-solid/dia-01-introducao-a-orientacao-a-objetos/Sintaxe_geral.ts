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
    this._connections =  connections;
  }

  get connections(): string[] {
    return this._connections;
  }

  get connectedTo(): string | undefined {
    return this._connectedTo;
  }

  set connectedTo(value: string | undefined) {
    if (!value || this._connections.includes(value)) this._connectedTo = value;
    else console.log("Sorry, connection unavailable!"); 
  }

  turnOn():void {
    console.log(`Brand ${this._brand}, size ${this._size}, resolution ${this._resolution}, connections ${this._connections}`);
  }
}

const tv1 = new Tv('Panasonic', 50, '2000x1500', ['HDMI', 'Ethernet']);
tv1.turnOn();
console.log(tv1.connections);
tv1.connectedTo = 'HDMI';
console.log(tv1.connectedTo);
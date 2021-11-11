export class Hotel {
  constructor(
    private _id: number,
    private _area: string,
    private _name: string,
    private _address: string,
    private _station: string,
    private _price: number,
    private _canStay: boolean
  ) {}

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get area(): string {
    return this._area;
  }

  public set area(area: string) {
    this._area = area;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get address(): string {
    return this._address;
  }

  public set address(address: string) {
    this._address = address;
  }

  public get station(): string {
    return this._station;
  }

  public set station(station: string) {
    this._station = station;
  }

  public get price(): number {
    return this._price;
  }

  public set price(price: number) {
    this._price = price;
  }

  public get canStay(): boolean {
    return this._canStay;
  }

  public set canStay(canStay: boolean) {
    this._canStay = canStay;
  }
}

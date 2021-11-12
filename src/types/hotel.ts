/**
 * ホテルを表す部品クラス
 */
export class Hotel {
  constructor(
    // id
    private _id: number,
    // エリア名
    private _area: string,
    // ホテル名
    private _name: string,
    // 住所
    private _address: string,
    // 最寄駅
    private _station: string,
    // 価格
    private _price: number,
    // 駐車場の有無
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

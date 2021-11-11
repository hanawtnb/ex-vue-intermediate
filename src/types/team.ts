/**
 * 野球チームを表す部品用のクラス.
 */
export class Team {
  constructor(
    // id
    private _id: number,
    // 野球チームの名前
    private _teamName: string,
    // 本拠地
    private _homeStadium: string,
    // 発足日
    private _born: Date,
    // 歴史
    private _history: string
  ) {}

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get teamName(): string {
    return this._teamName;
  }

  public set teamName(teamName: string) {
    this._teamName = teamName;
  }

  public get homeStadium(): string {
    return this._homeStadium;
  }

  public set homeStadium(homeStadium: string) {
    this._homeStadium = homeStadium;
  }

  public get born(): Date {
    return this._born;
  }

  public set born(born: Date) {
    this._born = born;
  }

  public get history(): string {
    return this._history;
  }

  public set history(history: string) {
    this._history = history;
  }

  /**
   * 発足日をフォーマットして返す.
   *
   * @remarks
   * 発足日を"yyyy年MM月dd日"の形にフォーマットして返す。
   */
  get formatBorn(): string {
    const MOON_ADJUSTMENT = 1;
    const year = this.born.getFullYear();
    const month = this.born.getMonth();
    const day = this.born.getDate();
    return year + "年" + (month + MOON_ADJUSTMENT) + "月" + day + "日";
  }
}

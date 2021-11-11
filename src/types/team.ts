export class Team {
  constructor(
    private _id: number,
    private _teamName: string,
    private _homeStadium: string,
    private _born: string,
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

  public get born(): string {
    return this._born;
  }

  public set born(born: string) {
    this._born = born;
  }

  public get history(): string {
    return this._history;
  }

  public set history(history: string) {
    this._history = history;
  }
}

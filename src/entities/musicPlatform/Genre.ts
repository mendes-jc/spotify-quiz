export default class Genre {
  private readonly id : string;

  public readonly name : string;

  constructor(id : string, name : string) {
    this.id = id;
    this.name = name;
  }
}
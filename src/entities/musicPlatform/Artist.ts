import Genre from "./Genre";

export default class Artist {
  private readonly id : string;

  public readonly name : string;
  public readonly genre : Genre;

  constructor(id: string, name: string, genre: Genre) {
    this.id = id;
    this.name = name;
    this.genre = genre;
  }
}
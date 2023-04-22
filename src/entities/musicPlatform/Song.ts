import Artist from "./Artist";

export default class Song {
  private readonly id : string;

  public readonly name : string;
  public readonly artist : Artist;

  constructor(id: string, name: string, artist: Artist) {
    this.id = id;
    this.name = name;
    this.artist = artist;
  }
}
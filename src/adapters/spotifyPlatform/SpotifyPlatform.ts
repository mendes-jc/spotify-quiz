import Artist from "../../entities/musicPlatform/Artist";
import Genre from "../../entities/musicPlatform/Genre";
import Song from "../../entities/musicPlatform/Song";
import IMusicPlatform, { TimeRange } from "../../services/quiz/interfaces/IMusicPlatform";

class SpotifyPlatform implements IMusicPlatform {
  getTopArtists(timeRange: TimeRange): Artist[] {
    throw new Error("Method not implemented.");
  }
  getTopSongs(timeRange: TimeRange): Song[] {
    throw new Error("Method not implemented.");
  }
  getTopGenres(timeRange: TimeRange): Genre[] {
    throw new Error("Method not implemented.");
  }

}
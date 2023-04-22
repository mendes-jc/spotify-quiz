import Artist from "../../../entities/musicPlatform/Artist";
import Genre from "../../../entities/musicPlatform/Genre";
import Song from "../../../entities/musicPlatform/Song";

enum TimeRange {
  LastFourWeeks,
  LastSixMonths,
  AllTime
}

export default interface IMusicPlatform {
  getTopArtists(timeRange: TimeRange) : Artist[];
  getTopSongs(timeRange: TimeRange): Song[];
  getTopGenres(timeRange: TimeRange): Genre[];
}

export { TimeRange };
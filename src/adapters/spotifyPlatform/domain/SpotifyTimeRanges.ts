import { TimeRange } from "../../../services/quiz/interfaces/IMusicPlatform";

class SpotifyTimeRanges {
  static fromTimeRange(timeRange: TimeRange) : string {
    switch(timeRange) {
      case TimeRange.AllTime:
        return "long_term";
      case TimeRange.LastFourWeeks:
        return "short_term";
      case TimeRange.LastSixMonths:
        return "medium_term";
      default:
        return "short_term";
    }
  }
}
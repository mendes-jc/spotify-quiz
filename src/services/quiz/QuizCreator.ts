import Quiz from "../../entities/quiz/Quiz";
import QuizQuestionType from "../../entities/quiz/QuizQuestionType";
import IMusicPlatform, { TimeRange } from "./interfaces/IMusicPlatform";

const sampleQuestion = "What was {User}'s most listened {QuestionType} on the last {TimeRange}";

const quizCreationParameters = {
  type: Object.keys(QuizQuestionType) as string[],
  timeRanges: Object.keys(TimeRange)
}

class QuizCreator {
  static createQuiz(musicPlatform: IMusicPlatform, userName: string) : Quiz {
    
    return new Quiz();
  }
}

export default QuizCreator;
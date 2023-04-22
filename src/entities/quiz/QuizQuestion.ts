import QuizAnswer from "./QuizAnswer";
import QuizQuestionType from "./QuizQuestionType";

class QuizQuestion {
  private readonly id : string;
  public readonly question : string;
  public readonly questionType : QuizQuestionType;
  public readonly options : QuizAnswer[];
  public readonly answerId: number;

  constructor(id: string, question : string, questionType : QuizQuestionType, options : QuizAnswer[], answerId: number) {
    this.validateOptions(options);
    
    this.id = id;
    this.question = question;
    this.questionType = questionType;
    this.options = options;
    this.answerId = answerId;
  }

  validateOptions(options: QuizAnswer[]) {
    const optionIds = new Set();
    const duplicatedIds : number[] = [];
    if (options == null) {
      throw new Error("Question options are null");
    }

    options.forEach(option => {
      if (optionIds.has(option.id)) {
        duplicatedIds.push(option.id);
      } else {
        optionIds.add(option.id);
      }
    })

    if (duplicatedIds.length > 0) {
      throw new Error(`Question has duplicated answer ids: ${duplicatedIds}`);
    }
  }
}

export default QuizQuestion;
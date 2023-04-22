import Quiz from "../../entities/quiz/Quiz";
import IUserRepository from "../../interfaces/IUserRepository";
import IMusicPlatform from "./interfaces/IMusicPlatform";
import IQuizRepository from "./interfaces/IRepository";
import QuizCreator from "./QuizCreator";

class QuizService {
  private readonly musicPlatform : IMusicPlatform;
  private readonly quizRepository : IQuizRepository;
  private readonly userRepository : IUserRepository;

  constructor(musicPlatform: IMusicPlatform, quizRepository: IQuizRepository, userRepository: IUserRepository) {
    this.musicPlatform = musicPlatform;
    this.quizRepository = quizRepository;
    this.userRepository = userRepository;
  }

  async getQuiz(userId: string) : Promise<Quiz> {
    const existingQuiz = await this.quizRepository.getQuiz(userId);

    if (existingQuiz !== null) {
      return existingQuiz;
    }

    const user = await this.userRepository.findUser(userId);
    
    const newQuiz = QuizCreator.createQuiz(this.musicPlatform, user.name);

    await this.quizRepository.saveQuiz(userId, newQuiz);

    return newQuiz;
  }
}
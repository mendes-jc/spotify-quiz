import Quiz from "../../../entities/quiz/Quiz";

export default interface IQuizRepository {
  getQuiz(userId: string) : Promise<Quiz>; 
  saveQuiz(userId: string, quiz: Quiz) : Promise<void>;
}
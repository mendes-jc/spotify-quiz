export default interface IUserRepository {
  findUser(userId: string) : User;
}
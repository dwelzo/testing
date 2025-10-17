// src/userService.ts
import { UserRepository, User } from "./userRepository";

export class UserService {
  constructor(private repo: UserRepository) {}

  async getUserName(id: number): Promise<string> {
    const user = await this.repo.findById(id);
    if (!user) throw new Error("User not found");
    return user.name;
  }
}

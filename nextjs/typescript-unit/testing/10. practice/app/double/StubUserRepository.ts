// app/StubUserRepository.ts
import { UserRepository, User } from "./userRepository";

export class StubUserRepository implements Partial<UserRepository> {
  async findById(id: number): Promise<User | null> {
    // Return predictable, fake data
    if (id === 1) return { id, name: "Stubbed User" };
    return null;
  }
}

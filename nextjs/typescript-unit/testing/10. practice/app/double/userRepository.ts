// src/userRepository.ts
export interface User {
  id: number;
  name: string;
}

export class UserRepository {
  async findById(id: number): Promise<User | null> {
    // Simulate real DB call
    console.log("Querying DB...");
    return { id, name: "Real User" };
  }
}

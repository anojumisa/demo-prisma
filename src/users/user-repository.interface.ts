export const IUserRepositoryToken = 'IUserRepositoryToken';

import { User } from './entity/user.entity';

export interface IUserRepository {
  findAll(): Promise<User[]>;
  findById(id: number): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(user: Omit<User, 'id'>): Promise<User>;
  update(id: number, user: Partial<Omit<User, 'id'>>): Promise<User>;
  delete(id: number): Promise<void>;
}

import { User } from './entity/user.entity';

export const USER_REPOSITORY = 'USER_REPOSITORY';

export interface IUserService {
  getAllUsers(): Promise<User[]>;
  getUserById(id: number): Promise<User | null>;
  createUser(user: Omit<User, 'id'>): Promise<User>;
  updateUser(id: number, user: Partial<Omit<User, 'id'>>): Promise<User>;
  deleteUser(id: number): Promise<void>;
}

import { IUserRepository } from './user-repository.interface';
import { Inject, Injectable } from '@nestjs/common';
import { IUserService } from './user-service.interface';

import { User } from './entity/user.entity';
import { IUserRepositoryToken } from './user-repository.interface';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject(IUserRepositoryToken)
    private readonly userRepository: IUserRepository,
  ) {}

  getAllUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  getUserById(id: number): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findByEmail(email);
  }

  createUser(user: Omit<User, 'id'>): Promise<User> {
    return this.userRepository.create(user);
  }

  create(user: Omit<User, 'id'>): Promise<User> {
    return this.userRepository.create(user);
  }

  updateUser(id: number, user: Partial<Omit<User, 'id'>>): Promise<User> {
    return this.userRepository.update(id, user);
  }

  deleteUser(id: number): Promise<void> {
    return this.userRepository.delete(id);
  }
}

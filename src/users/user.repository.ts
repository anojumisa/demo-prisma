import { Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { PrismaService } from 'prisma/prisma.service';
import { IUserRepository } from 'dist/user-repository.interface';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
    // async findAll(): Promise<User[]> {
    // const sql = 'SELECT * FROM users ORDER BY id';
    // return await this.databaseService.query<User>(sql);
    // }
  }

  async findById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async create(user: Omit<User, 'id'>): Promise<User> {
    return this.prisma.user.create({ data: user });
  }

  async update(id: number, user: Partial<Omit<User, 'id'>>): Promise<User> {
    return this.prisma.user.update({ where: { id }, data: user });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }
}

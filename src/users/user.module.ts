import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { PrismaService } from 'prisma/prisma.service';
import { IUserRepositoryToken } from './user-repository.interface';

@Module({
  providers: [
    {
      provide: IUserRepositoryToken,
      useClass: UserRepository,
    },
    UserService,
    PrismaService,
  ],
  controllers: [UserController],
})
export class UserModule {}

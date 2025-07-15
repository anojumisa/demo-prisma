import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entity/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<User | null> {
    return this.userService.getUserById(Number(id));
  }

  @Post()
  create(@Body() user: Omit<User, 'id'>): Promise<User> {
    return this.userService.createUser(user);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() user: Partial<Omit<User, 'id'>>,
  ): Promise<User> {
    return this.userService.updateUser(Number(id), user);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.userService.deleteUser(Number(id));
  }
}

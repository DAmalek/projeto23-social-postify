import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entity/user';
import { creatUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('user')
  createUser(@Body() body: creatUserDto) {
    return this.userService.createUser(body);
  }
}

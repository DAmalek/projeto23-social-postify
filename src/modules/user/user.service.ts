import { Injectable } from '@nestjs/common';
import { User } from './entity/user';
import { creatUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  createUser(body: creatUserDto) {
    return body;
  }
}

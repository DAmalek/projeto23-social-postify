import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './entity/user';
import { creatUserDto } from './dto/create-user.dto';
import { hashSync } from 'bcrypt';
import { UserRepository } from './user.repository';
import * as dayjs from 'dayjs';

@Injectable()
export class UserService {
  constructor(private readonly UserRepository: UserRepository) {}
  async createUser(body: creatUserDto) {
    const hashPassword = hashSync(body.password, 10);
    const userExist = await this.UserRepository.findUserByEmail(body.email);
    if (userExist)
      throw new HttpException('user already exists', HttpStatus.CONFLICT);
    await this.UserRepository.createuser({
      ...body,
      password: hashPassword,
      createdat: dayjs().format('DD/MM/YYYY'),
    });
    return {
      ...body,
      password: hashPassword,
      createdat: dayjs().format('DD/MM/YYYY'),
    };
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { creatUserDto } from './dto/create-user.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createuser(data: any) {
    await this.prisma.users.create({ data: data });
  }

  async findUserByEmail(email: string) {
    return await this.prisma.users.findFirst({ where: { email } });
  }
}

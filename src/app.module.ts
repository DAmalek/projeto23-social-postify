import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { PublicationsModule } from './modules/publications/publications.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, PublicationsModule, PrismaModule],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { PublicationsModule } from './modules/publications/publications.module';

@Module({
  imports: [UserModule, PublicationsModule],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { DatabeseService } from './database/databese.service';

@Module({
  imports: [AuthModule, UserModule, DatabaseModule],
  providers: [DatabeseService],
})
export class AppModule {}

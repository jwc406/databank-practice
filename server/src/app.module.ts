import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JwUsersModule } from './jw-users/jw-users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017'), JwUsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

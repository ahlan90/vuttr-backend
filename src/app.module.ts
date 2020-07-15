import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ToolsModule } from './tools/tools.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongodb:27017'),
    ToolsModule,
    AuthModule
  ],
  controllers: [
    AppController
  ]
})
export class AppModule {}
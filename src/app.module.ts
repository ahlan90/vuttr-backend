import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ToolsModule } from './tools/tools.module';
import { dataBaseURL } from 'local.settings';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL || dataBaseURL),
    ToolsModule,
    AuthModule
  ],
  controllers: [
    AppController
  ]
})
export class AppModule {}
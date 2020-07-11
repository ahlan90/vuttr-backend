import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ToolsModule } from './tools/tools.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL),
    ToolsModule,
    AuthModule
  ],
  controllers: [
    AppController
  ]
})
export class AppModule {}
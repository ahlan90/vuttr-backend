import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ToolsModule } from './tools/tools.module';
import { dataBaseURL } from 'local.settings';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL || dataBaseURL),
    ToolsModule,
  ]
})
export class AppModule {}

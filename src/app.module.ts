import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ToolsModule } from './tools/tools.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL),
    ToolsModule,
  ]
})
export class AppModule {}

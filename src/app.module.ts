import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ToolsModule } from './tools/tools.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://db_user:MTpITuXzeUtghVOT@cluster0-h8gex.mongodb.net/test?retryWrites=true&w=majority'),
    ToolsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

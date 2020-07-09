import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ToolsController } from './tools.controller';
import { ToolSchema } from './tool.schema';
import { ToolsService } from './tools.service';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Tool', schema: ToolSchema }])
  ],
  controllers: [ToolsController],
  providers: [ToolsService]
})
export class ToolsModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ToolsController } from './tools.controller';
import { ToolsService } from './tools.service';
import { ToolSchema } from './classes/tool.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Tool', schema: ToolSchema }])
  ],
  controllers: [ToolsController],
  providers: [ToolsService]
})
export class ToolsModule {}

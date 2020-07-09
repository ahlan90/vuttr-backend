import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Tool } from './classes/tool.schema';
import { CreateToolDto } from './dto/create-tool.dto';


@Injectable()
export class ToolsService {

    constructor(
        @InjectModel('Tool') private readonly toolModel: Model<Tool>
    ) {}

    async getAll(): Promise<Tool[]> {
      return this.toolModel.find().exec();
    }

    async getAllWithFilter(): Promise<Tool[]> {
        return this.toolModel.find().exec();
    }

    async create(tool: CreateToolDto) {
      const createdTool = new this.toolModel(tool);
      return createdTool.save();
    }
  
    async delete(id: string) {
      return await this.toolModel.deleteOne({ _id: id }).exec();
    }
    
}

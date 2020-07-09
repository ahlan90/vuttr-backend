import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Tool } from './tool.model';


@Injectable()
export class ToolsService {

    constructor(
        @InjectModel('Tool') private readonly toolModel: Model<Tool>
    ) {}

    async getAll(): Promise<Tool[]> {
      return this.toolModel.find().exec();
    }
  
    async getById(id: string) {
      return await this.toolModel.findById(id).exec();
    }
  
    async create(Tool: Tool) {
      const createdTool = new this.toolModel(Tool);
      return createdTool.save();
    }
  
    async update(id: string, Tool: Tool) {
      await this.toolModel.updateOne({ _id: id }, Tool).exec();
      return this.getById(id);
    }
  
    async delete(id: string) {
      return await this.toolModel.deleteOne({ _id: id }).exec();
    }
    
}

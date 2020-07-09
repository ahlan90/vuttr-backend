import { Logger, Controller, Get, Param, Post, Body, Delete, Patch } from "@nestjs/common";

import { ToolsService } from "./tools.service";
import { Tool } from "./tool.model";


@Controller('tools')
export class ToolsController {
    
    private logger = new Logger('ToolsController');

    constructor(
        private toolsService: ToolsService
    ) {}
 
   @Get()
   async getAll(): Promise<Tool[]> {
     return this.toolsService.getAll();
   }
 
   @Get(':id')
   async getTaskById(@Param('id') id: string,): Promise<Tool> {
     return this.toolsService.getById(id);
   }
 
   @Post()
   create(@Body() Tool: Tool): Promise<Tool> {
     return this.toolsService.create(Tool);
   }
 
   @Delete(':id')
   deleteTask(
     @Param('id') id: string
   ) {
     return this.toolsService.delete(id);
   }
 
   @Patch('/:id')
   update(
     @Param('id') id: string, 
     @Body() Tool: Tool,
   ): Promise<Tool> {
     return this.toolsService.update(id, Tool);
   }
}

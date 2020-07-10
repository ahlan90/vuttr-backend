import { Logger, Controller, Get, Param, Post, Body, Delete, Query } from "@nestjs/common";

import { ToolsService } from "./tools.service";
import { Tool } from "./classes/tool.schema";
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from "@nestjs/swagger";
import { CreateToolDto } from "./dto/create-tool.dto";


@ApiTags('tools')
@Controller('tools')
export class ToolsController {

    private logger = new Logger('ToolsController');

    constructor(
        private toolsService: ToolsService
    ) { }

    @Get()
    @ApiOperation({ summary: 'List all tools' })
    async getAll(): Promise<Tool[]> {
        return this.toolsService.getAll();
    }

    @Get()
    @ApiOperation({ summary: 'List of tools with tag filter' })
    async getAllWithFilter(
        @Query('tag') tag
    ): Promise<Tool[]> {
        return this.toolsService.getAllWithFilter();
    }blz

    @Post()
    @ApiOperation({ summary: 'Create tool' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() createToolDto: CreateToolDto): Promise<Tool> {
        return this.toolsService.create(createToolDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a tool by id' })
    deleteTask(
        @Param('id') id: string
    ) {
        return this.toolsService.delete(id);
    }

}

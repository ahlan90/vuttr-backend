import { Logger, Controller, Get, Param, Post, Body, Delete, Query, HttpCode } from "@nestjs/common";

import { ToolsService } from "./tools.service";
import { Tool } from "./classes/tool.schema";
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from "@nestjs/swagger";
import { CreateToolDto } from "./dto/create-tool.dto";


@ApiTags('tools')
@Controller()
export class ToolsController {

    private logger = new Logger('ToolsController');

    constructor(
        private toolsService: ToolsService
    ) { }

    @Get('tools')
    @ApiOperation({ summary: 'List all tools' })
    async getAll(): Promise<Tool[]> {
        return this.toolsService.getAll();
    }

    @Get('tools?tag=:tag')
    @ApiOperation({ summary: 'Filter list of tools by tag' })
    async getAllWithFilter(
        @Param('tag') tag: string
    ): Promise<Tool[]> {
        return this.toolsService.getAllWithFilter();
    }

    @Post('tools')
    @ApiOperation({ summary: 'Create tool' })
    @ApiResponse({ status: 201, description: 'Created' })
    @ApiBody({ type: CreateToolDto })
    async create(@Body() createToolDto: CreateToolDto): Promise<Tool> {
        return this.toolsService.create(createToolDto);
    }

    @Delete('tools/:id')
    @HttpCode(204)
    @ApiOperation({ summary: 'Delete a tool by id' })
    @ApiResponse({ status: 204, description: 'No Content' })
    deleteTask(
        @Param('id') id: string
    ) {
        return this.toolsService.delete(id);
    }

}

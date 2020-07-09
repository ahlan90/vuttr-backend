import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateToolDto {

    @ApiProperty({
        example: 'Notion',
        description: 'The name of Tool',

    })
    @IsString()
    readonly title: string;

    @ApiProperty({
        example: 'https://notion.so',
        description: 'The link to the Tool'
    })
    @IsString()
    readonly link: string;

    @ApiProperty({
        example: 'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized',
        description: 'The description of the Tool'
    })
    @IsString()
    readonly description: string;

    @ApiProperty({
        example: '[organization, planning, collaboration]',
        description: 'The list tags related of the Tool',
        type: [String]
    })
    @IsString()
    readonly tags: string[];

}
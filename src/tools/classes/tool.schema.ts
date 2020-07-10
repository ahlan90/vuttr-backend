import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaOptions } from 'mongoose';


const schemaOptions: SchemaOptions = {
    toJSON: {
        transform: function (doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        }
    }
}
@Schema(schemaOptions)
export class Tool extends Document {

    @ApiProperty({
        example: 'sd123s213ss1231123123',
        description: 'The id of Tool'
    })
    @Prop()
    id: string;

    @ApiProperty({
        example: 'Notion',
        description: 'The name of Tool',
        
    })
    @Prop({ required: true })
    title: string;

    @ApiProperty({ 
        example: 'https://notion.so', 
        description: 'The link to the Tool' 
    })
    @Prop()
    link: string;

    @ApiProperty({ 
        example: 'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized', 
        description: 'The description of the Tool' 
    })
    @Prop()
    description: string;

    @ApiProperty({ 
        example: ['organization', 'planning', 'collaboration'], 
        description: 'The list tags related of the Tool' 
    })
    @Prop([String])
    tags: string[];
}

export const ToolSchema = SchemaFactory.createForClass(Tool);
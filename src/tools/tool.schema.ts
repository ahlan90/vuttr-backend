import * as mongoose from 'mongoose';

export const ToolSchema = new mongoose.Schema({
    title: String,
    link: String,
    description: String,
    tags: [{
        type: String
    }]
});
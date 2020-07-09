import { Document } from 'mongoose';

export class Tool extends Document{
    id: number;
    title: string;
    link: string;
    description: string;
    tags: string[];
}

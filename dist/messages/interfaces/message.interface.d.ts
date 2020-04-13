import { Document } from 'mongoose';
export interface Message extends Document {
    readonly content: String;
    readonly timestamp: Date;
}

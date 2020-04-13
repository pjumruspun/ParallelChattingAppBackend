import { Document } from 'mongoose';

export interface Message extends Document {
    readonly content: String,
    readonly timestamp: Date,
}

// export interface Message extends MessageEntity, Document {};
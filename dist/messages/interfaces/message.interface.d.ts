import { Document } from 'mongoose';
import { Schema } from 'mongoose';
export interface Message extends Document {
    readonly content: String;
    readonly timestamp: Date;
    readonly sender: {
        type: Schema.Types.ObjectId;
        ref: 'Client';
    };
    readonly group: {
        type: Schema.Types.ObjectId;
        ref: 'Group';
    };
}

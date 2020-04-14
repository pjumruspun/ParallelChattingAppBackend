import { Document } from 'mongoose';
import { Schema } from 'mongoose';
export interface Group extends Document {
    readonly name: String;
    readonly client: [{
        type: Schema.Types.ObjectId;
        ref: 'Client';
    }];
}

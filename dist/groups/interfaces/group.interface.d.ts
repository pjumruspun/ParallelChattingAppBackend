import { Document } from 'mongoose';
import { Types } from 'mongoose';
export interface Group extends Document {
    name: String;
    client: [{
        type: Types.ObjectId;
        ref: 'Client';
    }];
}

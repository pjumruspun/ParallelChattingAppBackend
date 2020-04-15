import { Document } from 'mongoose';
import { Types } from 'mongoose';
export interface Group extends Document {
    name: String;
    client: [{
        _id: Types.ObjectId;
        ref: 'Client';
    }];
}

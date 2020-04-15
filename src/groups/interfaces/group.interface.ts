import { Document } from 'mongoose';
import { Schema, Types }  from 'mongoose';

export interface Group extends Document {
    name: String;
    client: [{
        //_id: Types.ObjectId,
        type: Types.ObjectId,
        ref: 'Client'
    }];
}

// export interface Message extends MessageEntity, Document {};
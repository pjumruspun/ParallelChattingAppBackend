import { Document } from 'mongoose';

export interface Client extends Document {
    readonly name: String,
    readonly group: [ 
        String
    ];
}

// export interface Message extends MessageEntity, Document {};
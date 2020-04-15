import { Document, Schema } from 'mongoose';
export interface Client extends Document {
    readonly name: String;
    readonly group: [{
        group_id: {
            type: Schema.Types.ObjectId;
            ref: 'Group';
        };
        last_message_id: {
            type: Schema.Types.ObjectId;
            ref: 'Message';
        };
        join: Boolean;
    }];
}

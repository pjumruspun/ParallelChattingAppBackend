import { Schema } from 'mongoose';
export declare class CreateClientDto {
    name: String;
    group: [{
        group_id: {
            type: Schema.Types.ObjectId;
            ref: 'Group';
        };
        last_message_id: {
            type: Schema.Types.ObjectId;
            ref: 'Message';
        };
    }];
}

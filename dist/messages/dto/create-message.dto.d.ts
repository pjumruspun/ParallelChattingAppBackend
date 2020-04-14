import { Schema } from 'mongoose';
export declare class CreateMessageDto {
    content: String;
    timestamp: Date;
    sender: {
        type: Schema.Types.ObjectId;
        ref: 'Client';
    };
    group: String;
}

import { Types } from 'mongoose';
export declare class CreateMessageDto {
    content: String;
    timestamp: Date;
    sender: {
        type: Types.ObjectId;
        ref: 'Client';
    };
    group: {
        type: Types.ObjectId;
        ref: 'Group';
    };
}

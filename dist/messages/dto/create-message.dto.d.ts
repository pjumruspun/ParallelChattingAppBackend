import { Types } from 'mongoose';
export declare class CreateMessageDto {
    content: String;
    timestamp: {
        type: Date;
        default: Date;
    };
    sender: {
        type: Types.ObjectId;
        ref: 'Client';
    };
    group: {
        type: Types.ObjectId;
        ref: 'Group';
    };
}

import { Types } from 'mongoose';
export declare class CreateGroupDto {
    name: String;
    client: [{
        type: Types.ObjectId;
        ref: 'Client';
    }];
    message: [{
        type: Types.ObjectId;
        ref: 'Message';
    }];
}

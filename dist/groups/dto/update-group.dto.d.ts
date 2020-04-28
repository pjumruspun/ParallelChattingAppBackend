import { Types } from 'mongoose';
export declare class UpdateGroupDto {
    name: String;
    client: [{
        type: Types.ObjectId;
        ref: 'Client';
    }];
}

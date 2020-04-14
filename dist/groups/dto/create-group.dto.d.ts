import { Schema } from 'mongoose';
export declare class CreateGroupDto {
    name: String;
    client: [{
        type: Schema.Types.ObjectId;
        ref: 'Client';
    }];
}

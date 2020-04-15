import { Schema } from 'mongoose';
declare class GroupComplexObj {
    readonly group_id: {
        type: Schema.Types.ObjectId;
        ref: 'Group';
    };
    readonly last_message_id: {
        type: Schema.Types.ObjectId;
        ref: 'Message';
    };
    readonly join: Boolean;
}
export declare class CreateClientDto {
    readonly name: String;
    readonly group: [GroupComplexObj];
}
export {};

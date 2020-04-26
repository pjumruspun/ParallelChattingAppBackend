import { Types } from 'mongoose';
declare class GroupComplexObj {
    readonly group_id: {
        type: Types.ObjectId;
        ref: 'Group';
    };
    readonly last_message_id: {
        type: Types.ObjectId;
        ref: 'Message';
    };
    readonly join: {
        type: Boolean;
        default: true;
    };
}
export declare class CreateClientDto {
    readonly name: String;
    readonly group: [GroupComplexObj];
}
export {};

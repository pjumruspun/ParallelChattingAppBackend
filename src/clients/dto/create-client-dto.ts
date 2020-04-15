import { ApiProperty, } from '@nestjs/swagger';
import { Schema } from 'mongoose';

class GroupComplexObj  {
    @ApiProperty()
    readonly group_id: {
        type: Schema.Types.ObjectId,
        ref: 'Group',
    };
    @ApiProperty()
    readonly last_message_id: {
        type: Schema.Types.ObjectId,
        ref: 'Message',
    };
    @ApiProperty()
    readonly join: Boolean;
};

export class CreateClientDto {
    @ApiProperty()
    readonly name: String;

    @ApiProperty({ type: GroupComplexObj })
    readonly group: [ GroupComplexObj ];
}
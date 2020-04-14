import { ApiProperty } from '@nestjs/swagger';
import { Schema } from 'mongoose';

export class CreateClientDto {
    @ApiProperty()
    name: String;

    @ApiProperty()
    group: [
        {
            group_id: {
                type: Schema.Types.ObjectId,
                ref: 'Group',
            },
            last_message_id: {
                type: Schema.Types.ObjectId,
                ref: 'Message',
            }
        }
    ];
}
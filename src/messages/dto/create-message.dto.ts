import { ApiProperty } from '@nestjs/swagger';
import { Types }  from 'mongoose';

export class CreateMessageDto {
    @ApiProperty()
    content: String;

    @ApiProperty()
    timestamp: Date;

    @ApiProperty()
    sender: {
        type: Types.ObjectId,
        ref: 'Client'
    };

    @ApiProperty()
    group: {
        type: Types.ObjectId,
        ref: 'Group'
    };
}
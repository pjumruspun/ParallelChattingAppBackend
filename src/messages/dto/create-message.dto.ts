import { ApiProperty } from '@nestjs/swagger';
import { Schema }  from 'mongoose';

export class CreateMessageDto {
    @ApiProperty()
    content: String;

    @ApiProperty()
    timestamp: Date;

    @ApiProperty()
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'Client'
    };

    @ApiProperty()
    group: String;
}
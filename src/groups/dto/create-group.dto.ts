import { ApiProperty } from '@nestjs/swagger';
import { Schema }  from 'mongoose';

export class CreateGroupDto {
    @ApiProperty()
    name: String;

    @ApiProperty()
    client: [{
        type: Schema.Types.ObjectId,
        ref: 'Client'
    }];
}
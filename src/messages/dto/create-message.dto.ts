import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto {
    @ApiProperty()
    content: String;

    @ApiProperty()
    timestamp: Date;

    @ApiProperty()
    read: Boolean;
}
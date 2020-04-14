import { ApiProperty } from '@nestjs/swagger';

export class CreateClientDto {
    @ApiProperty()
    name: String;

    @ApiProperty()
    group: [ 
        String
    ];
}
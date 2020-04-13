import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Client } from './interface/client.interface';
import { CreateClientDto } from './dto/create-client-dto';

@Controller('clients')
export class ClientsController {
    constructor(private clientsService: ClientsService) {}
    @Get()
    async findAll(): Promise<Client[]> {
        return this.clientsService.findAll();
    }

    @Get('/:id')
    findOne(@Param('id') id: string): string {
        return 'This API returns a client with id = ' + id + '!';
    }

    @Post()
    async create(@Body() createClientDto: CreateClientDto) {
        this.clientsService.create(createClientDto);
    }
}

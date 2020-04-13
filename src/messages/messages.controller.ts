import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './interfaces/message.interface';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('messages')
export class MessagesController {
    constructor(private messagesService: MessagesService) {}
    @Get()
    async findAll(): Promise<Message[]> {
        return this.messagesService.findAll();
    }

    @Get('/:id')
    findOne(@Param('id') id: string): string {
        return 'This API returns a message with id = ' + id + '!';
    }

    @Post()
    async create(@Body() createMessageDto: CreateMessageDto) {
        this.messagesService.create(createMessageDto);
    }
}

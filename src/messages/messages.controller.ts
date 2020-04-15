import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './interfaces/message.interface';
import { CreateMessageDto } from './dto/create-message.dto';
import { ApiTags, ApiBody } from '@nestjs/swagger';

@ApiTags('Messages')
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

    @ApiBody({ type: CreateMessageDto })
    @Post()
    async create(@Body() createMessageDto: CreateMessageDto) {
        return await this.messagesService.create(createMessageDto);
    }

    @ApiBody({ type: CreateMessageDto })
    @Put('/:id')
    async update(@Param('id')id: String, @Body() updateMessageDto: CreateMessageDto) {
        return await this.messagesService.update(id, updateMessageDto);
    }

}

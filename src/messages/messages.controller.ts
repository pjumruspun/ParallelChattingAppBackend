import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './interfaces/message.interface';
import { CreateMessageDto } from './dto/create-message.dto';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { GroupsController } from 'src/groups/groups.controller';

@ApiTags('Messages')
@Controller('messages')
export class MessagesController {
    constructor(private messagesService: MessagesService, private groupController: GroupsController) {}
    @Get()
    async findAll(): Promise<Message[]> {
        return this.messagesService.findAll();
    }

    @Get('/:id')
    findOne(@Param('id') id: string): Promise<Message> {
        return this.messagesService.findOne(id);
    }

    @Get('/findbygroup/:groupid')
    findbygroup(@Param('groupid') groupid: string): Promise<Message[]>{
        return this.messagesService.findByGroup(groupid);
    }

    @ApiBody({ type: CreateMessageDto })
    @Post()
    async create(@Body() createMessageDto: CreateMessageDto) {
        const returnMessage = await this.messagesService.create(createMessageDto);
        if(createMessageDto.group != undefined){
            this.groupController.addmessage(String(createMessageDto.group), returnMessage._id)
        }
        return returnMessage;
    }

    @ApiBody({ type: CreateMessageDto })
    @Put('/:id')
    async update(@Param('id')id: String, @Body() updateMessageDto: CreateMessageDto) {
        return await this.messagesService.update(id, updateMessageDto);
    }
}

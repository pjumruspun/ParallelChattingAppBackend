import { Injectable, Inject } from '@nestjs/common';
import { Model, Document } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Message } from './interfaces/message.interface';
import { CreateMessageDto } from './dto/create-message.dto';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class MessagesService {
    constructor(
        @Inject('MESSAGE_MODEL') private messageModel: Model<Message>
    ){}

    async create(createMessageDto: CreateMessageDto): Promise<Message> {
        const createdMessage = new this.messageModel(createMessageDto);
        return createdMessage.save();
    }

    findAll() {
        return this.messageModel.find().exec();
    }

    
}

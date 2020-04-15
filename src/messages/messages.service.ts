import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Message } from './interfaces/message.interface';
import { CreateMessageDto } from './dto/create-message.dto';

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

    hasMessage(id: String) {
        var found: boolean = this.messageModel.findById(id) == null;
        console.log(found);
        return found;
    }

    async update(id: String, updateMessageDto: CreateMessageDto){
        await this.messageModel.findByIdAndUpdate(id, updateMessageDto);
        return await this.messageModel.findById(id);
    }
}

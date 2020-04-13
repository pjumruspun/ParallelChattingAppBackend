import { Model } from 'mongoose';
import { Message } from './interfaces/message.interface';
import { CreateMessageDto } from './dto/create-message.dto';
export declare class MessagesService {
    private messageModel;
    constructor(messageModel: Model<Message>);
    create(createMessageDto: CreateMessageDto): Promise<Message>;
    findAll(): Promise<Message[]>;
}

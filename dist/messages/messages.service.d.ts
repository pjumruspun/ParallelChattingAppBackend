import { Model } from 'mongoose';
import { Message } from './interfaces/message.interface';
import { CreateMessageDto } from './dto/create-message.dto';
export declare class MessagesService {
    private messageModel;
    constructor(messageModel: Model<Message>);
    create(createMessageDto: CreateMessageDto): Promise<Message>;
    findAll(): Promise<Message[]>;
    findOne(id: any): Promise<Message>;
    hasMessage(id: String): Promise<boolean>;
    update(id: String, updateMessageDto: CreateMessageDto): Promise<Message>;
    findByGroup(groupid: string): Promise<Message[]>;
}

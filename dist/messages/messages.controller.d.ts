import { MessagesService } from './messages.service';
import { Message } from './interfaces/message.interface';
import { CreateMessageDto } from './dto/create-message.dto';
export declare class MessagesController {
    private messagesService;
    constructor(messagesService: MessagesService);
    findAll(): Promise<Message[]>;
    findOne(id: any): string;
    create(createMessageDto: CreateMessageDto): Promise<void>;
}

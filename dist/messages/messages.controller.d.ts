import { MessagesService } from './messages.service';
import { Message } from './interfaces/message.interface';
import { CreateMessageDto } from './dto/create-message.dto';
import { GroupsController } from 'src/groups/groups.controller';
export declare class MessagesController {
    private messagesService;
    private groupController;
    constructor(messagesService: MessagesService, groupController: GroupsController);
    findAll(): Promise<Message[]>;
    findOne(id: string): Promise<Message>;
    findbygroup(groupid: string): Promise<Message[]>;
    create(createMessageDto: CreateMessageDto): Promise<Message>;
    update(id: String, updateMessageDto: CreateMessageDto): Promise<Message>;
}

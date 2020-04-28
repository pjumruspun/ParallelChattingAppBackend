import { MessagesService } from './messages.service';
import { Message } from './interfaces/message.interface';
import { CreateMessageDto } from './dto/create-message.dto';
import { GroupsController } from 'src/groups/groups.controller';
import { ClientsService } from 'src/clients/clients.service';
import { ClientsController } from 'src/clients/clients.controller';
export declare class MessagesController {
    private messagesService;
    private groupController;
    private clientService;
    private clientController;
    constructor(messagesService: MessagesService, groupController: GroupsController, clientService: ClientsService, clientController: ClientsController);
    findAll(): Promise<Message[]>;
    findOne(id: string): Promise<Message>;
    findbygroup(groupid: string): Promise<Message[]>;
    read(clientid: string, groupid: string): Promise<Message[]>;
    create(createMessageDto: CreateMessageDto): Promise<Message>;
    update(id: String, updateMessageDto: CreateMessageDto): Promise<Message>;
    getlastmessage(groupid: string): Promise<Message>;
    delete(id: string): Promise<Message>;
    deleteAll(): Promise<Message[]>;
}

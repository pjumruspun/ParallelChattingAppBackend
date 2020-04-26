import { GroupsService } from './groups.service';
import { Group } from './interfaces/group.interface';
import { CreateGroupDto } from './dto/create-group.dto';
import { ClientsService } from 'src/clients/clients.service';
import { ClientsController } from 'src/clients/clients.controller';
import { MessagesService } from 'src/messages/messages.service';
export declare class GroupsController {
    private groupsService;
    private clientsService;
    private clientController;
    private messageService;
    constructor(groupsService: GroupsService, clientsService: ClientsService, clientController: ClientsController, messageService: MessagesService);
    findAll(): Promise<Group[]>;
    findOne(id: string): Promise<Group>;
    create(createGroupDto: CreateGroupDto): Promise<Group>;
    addmember(groupid: String, memberid: String): Promise<any>;
    removemember(groupid: String, memberid: String): Promise<any>;
    addmessage(groupid: String, messageid: String): Promise<any>;
    delete(id: String): Promise<Group>;
}

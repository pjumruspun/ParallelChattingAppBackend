import { GroupsService } from './groups.service';
import { Group } from './interfaces/group.interface';
import { CreateGroupDto } from './dto/create-group.dto';
import { ClientsService } from 'src/clients/clients.service';
export declare class GroupsController {
    private groupsService;
    private clientsService;
    constructor(groupsService: GroupsService, clientsService: ClientsService);
    findAll(): Promise<Group[]>;
    findOne(id: string): Promise<Group>;
    create(createGroupDto: CreateGroupDto): Promise<Group>;
    addmember(groupid: String, memberid: String): Promise<any>;
    removemember(groupid: String, memberid: String): Promise<any>;
    delete(id: String): Promise<Group>;
}

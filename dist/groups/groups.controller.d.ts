import { GroupsService } from './groups.service';
import { Group } from './interfaces/group.interface';
import { CreateGroupDto } from './dto/create-group.dto';
export declare class GroupsController {
    private groupsService;
    constructor(groupsService: GroupsService);
    findAll(): Promise<Group[]>;
    findOne(id: string): Promise<Group>;
    create(createGroupDto: CreateGroupDto): Promise<Group>;
    addmember(groupid: String, memberid: String): Promise<any>;
    delete(id: String): Promise<Group>;
}

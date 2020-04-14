import { GroupsService } from './groups.service';
import { Group } from './interfaces/group.interface';
import { CreateGroupDto } from './dto/create-group.dto';
export declare class GroupsController {
    private groupsService;
    constructor(groupsService: GroupsService);
    findAll(): Promise<Group[]>;
    findOne(id: string): string;
    create(createGroupDto: CreateGroupDto): Promise<void>;
}

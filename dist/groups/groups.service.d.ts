import { Model } from 'mongoose';
import { Group } from './interfaces/group.interface';
import { CreateGroupDto } from './dto/create-group.dto';
export declare class GroupsService {
    private groupModel;
    constructor(groupModel: Model<Group>);
    create(createGroupDto: CreateGroupDto): Promise<Group>;
    findAll(): Promise<Group[]>;
}

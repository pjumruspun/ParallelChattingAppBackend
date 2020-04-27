import { Model } from 'mongoose';
import { Group } from './interfaces/group.interface';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
export declare class GroupsService {
    private groupModel;
    constructor(groupModel: Model<Group>);
    create(createGroupDto: CreateGroupDto): Promise<Group>;
    findAll(): Promise<Group[]>;
    findByName(name: string): Promise<Group>;
    findOne(id: String): Promise<Group>;
    update(id: String, updateGroupDto: UpdateGroupDto): Promise<Group>;
    deleteById(id: String): Promise<Group>;
    hasGroup(id: String): boolean;
}

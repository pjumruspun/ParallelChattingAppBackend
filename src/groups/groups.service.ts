import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Group } from './interfaces/group.interface';
import { CreateGroupDto } from './dto/create-group.dto';

@Injectable()
export class GroupsService {
    constructor(
        @Inject('GROUP_MODEL') private groupModel: Model<Group>
    ){}

    async create(createGroupDto: CreateGroupDto): Promise<Group> {
        const createdGroup = new this.groupModel(createGroupDto);
        return createdGroup.save();
    }

    findAll() {
        return this.groupModel.find().exec();
    }

    
}

import { Injectable, Inject } from '@nestjs/common';
import { Model, Schema, Mongoose, Types } from 'mongoose';
import { Group } from './interfaces/group.interface';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

@Injectable()
export class GroupsService {
    constructor(
        @Inject('GROUP_MODEL') private groupModel: Model<Group>
    ){}

    async create(createGroupDto: CreateGroupDto): Promise<Group> {
        const createdGroup = new this.groupModel(createGroupDto);
        return createdGroup.save();
    }

    async findAll() {
        return this.groupModel.find().exec();
    }

    async findOne(id: String) {
        return this.groupModel.findById(id);
    }

    async update(id: String, updateGroupDto: UpdateGroupDto){
        return await this.groupModel.findByIdAndUpdate(id, updateGroupDto);
    }

    async deleteById(id: String): Promise<Group> {
        return this.groupModel.findByIdAndRemove(id);
    }

    hasGroup(id: String){
        var found = this.groupModel.findOne({ _id: id }) != null;
        // console.log(found);
        return found;
    }
    
}

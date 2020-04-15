import { Controller, Get, Post, Param, Body, Delete, Put } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { Group } from './interfaces/group.interface';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto'
import { ApiTags } from '@nestjs/swagger';
import { Types } from 'mongoose';

@ApiTags('Groups')
@Controller('groups')
export class GroupsController {
    constructor(private groupsService: GroupsService) {}
    @Get()
    async findAll(): Promise<Group[]> {
        return this.groupsService.findAll();
    }

    @Get('/:id')
    findOne(@Param('id') id: string): Promise<Group> {
        return this.groupsService.findOne(id);
    }

    @Post()
    async create(@Body() createGroupDto: CreateGroupDto) {
        return this.groupsService.create(createGroupDto);
    }

    @Put('/:groupid/client/add/:memberid')
    async addmember(@Param('groupid') groupid: String, @Param('memberid') memberid: String){
        var updateGroupDto: any
        updateGroupDto = await this.groupsService.findOne(groupid);
        updateGroupDto.client.push(new Types.ObjectId(String(memberid)));
        // console.log(updateGroupDto);
        await this.groupsService.addMember(groupid, updateGroupDto);
        return updateGroupDto;
    }

    @Delete('/:id')
    async delete(@Param('id') id: String): Promise<Group> {
        return this.groupsService.deleteById(id);
    }
}

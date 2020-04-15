import { Controller, Get, Post, Param, Body, Delete, Put } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { Group } from './interfaces/group.interface';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto'
import { ApiTags } from '@nestjs/swagger';
import { Types } from 'mongoose';
import { ClientsService } from 'src/clients/clients.service';

@ApiTags('Groups')
@Controller('groups')
export class GroupsController {
    constructor(private groupsService: GroupsService, private clientsService: ClientsService) {}
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
        var updateGroupDto: any = []
        updateGroupDto = await this.groupsService.findOne(groupid);
        if(this.clientsService.hasClient(memberid)){
            var member: Types.ObjectId = new Types.ObjectId(String(memberid))
            console.log(updateGroupDto.client.indexOf(member));
            if(updateGroupDto.client.indexOf(member) == -1)
            {
                updateGroupDto.client.push(member);
                await this.groupsService.update(groupid, updateGroupDto);
                return updateGroupDto;
            }
            else return "Duplicate member id"
            
        }
        else
            return "Invalid member id";
        // console.log(updateGroupDto);
    }

    @Put('/:groupid/client/remove/:memberid')
    async removemember(@Param('groupid') groupid: String, @Param('memberid') memberid: String){
        var updateGroupDto: any = []
        updateGroupDto = await this.groupsService.findOne(groupid);
        if(this.clientsService.hasClient(memberid)){
            var member: Types.ObjectId = new Types.ObjectId(String(memberid))
            console.log(updateGroupDto.client.indexOf(member));
            if(updateGroupDto.client.indexOf(member) != -1)
            {
                updateGroupDto.client.remove(member);
                await this.groupsService.update(groupid, updateGroupDto);
                return updateGroupDto;
            }
            else return "No member id in group"
            
        }
        else
            return "Invalid member id";
        // console.log(updateGroupDto);
    }

    @Delete('/:id')
    async delete(@Param('id') id: String): Promise<Group> {
        return this.groupsService.deleteById(id);
    }
}

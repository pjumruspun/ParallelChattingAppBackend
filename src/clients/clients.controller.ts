import { Controller, Get, Post, Param, Body, Delete, Put } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Client } from './interface/client.interface';
import { CreateClientDto } from './dto/create-client-dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { Types } from 'mongoose';
import { GroupsService } from 'src/groups/groups.service';

@ApiTags('Clients')
@Controller('clients')
export class ClientsController {
    constructor(private clientsService: ClientsService, private groupService: GroupsService) {}
    @Get()
    async findAll(): Promise<Client[]> {
        return this.clientsService.findAll();
    }

    @Get('/:id')
    findOne(@Param('id') id: string): string {
        return 'This API returns a client with id = ' + id + '!';
    }

    @Post()
    @ApiBody({ type: CreateClientDto })
    async create(@Body() createClientDto: CreateClientDto) {
        this.clientsService.create(createClientDto);
    }

    @Put('/:memberid/group/add/:groupid')
    async addmember(@Param('memberid') memberid: String, @Param('groupid') groupid: String){
        var createClientDto: any = []
        createClientDto = await this.clientsService.findOne(memberid);
        if(this.groupService.hasGroup(groupid)){
            var group = {
                _id: new Types.ObjectId,
                group_id: groupid,
                join: true
            }

            if(true){
                createClientDto.group.push(group)
                // console.log(createClientDto);
                await this.clientsService.update(memberid, createClientDto);
                return createClientDto;
            }
            else{
                return "Duplicate group id"; // Doesn't work for now
            }
        }
        else
            return "Invalid group id";
        // console.log(updateGroupDto);
    }

    @Put('/:memberid/group/remove/:groupid')
    async removemember(@Param('memberid') memberid: String, @Param('groupid') groupid: String){
        var createClientDto: any = []
        createClientDto = await this.clientsService.findOne(memberid);
        if(this.groupService.hasGroup(groupid)){
            var group = {
                _id: new Types.ObjectId,
                group_id: groupid,
                join: true
            }

            if(true){
                for(var i = 0; i < createClientDto.group.length; ++i){
                    // console.log(createClientDto.group[i].group_id)
                    if(createClientDto.group[i].group_id == groupid){
                        createClientDto.group.splice(i, 1);
                        --i;
                    }
                }
                // console.log(createClientDto);
                await this.clientsService.update(memberid, createClientDto);
                return createClientDto;
            }
            else{
                return "Duplicate group id"; // Doesn't work for now
            }
        }
        else
            return "Invalid group id";
        // console.log(updateGroupDto);
    }

    @Put('/setjoinstatus/:memberid/:groupid/:bool')
    async setjoinstatus(@Param('memberid') memberid: String, @Param('groupid') groupid: String, @Param('bool') bool: Boolean){
        var createClientDto: any = []
        createClientDto = await this.clientsService.findOne(memberid);
        if(this.groupService.hasGroup(groupid)){
            if(true){
                for(var i = 0; i < createClientDto.group.length; ++i){
                    console.log(createClientDto.group[i].group_id)
                    if(createClientDto.group[i].group_id == groupid){
                        createClientDto.group[i].join = bool;
                    }
                }
                // console.log(createClientDto);
                await this.clientsService.update(memberid, createClientDto);
                return createClientDto;
            }
            else{
                return "Duplicate group id"; // Doesn't work for now
            }
        }
        else
            return "Invalid group id";
        // console.log(updateGroupDto);
    }

    @Delete('/:id')
    async delete(@Param('id') id: String): Promise<Client> {
        return this.clientsService.deleteById(id);
    }
}

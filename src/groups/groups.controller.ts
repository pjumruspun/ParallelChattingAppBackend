import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { Group } from './interfaces/group.interface';
import { CreateGroupDto } from './dto/create-group.dto';

@Controller('groups')
export class GroupsController {
    constructor(private groupsService: GroupsService) {}
    @Get()
    async findAll(): Promise<Group[]> {
        return this.groupsService.findAll();
    }

    @Get('/:id')
    findOne(@Param('id') id: string): string {
        return 'This API returns a group with id = ' + id + '!';
    }

    @Post()
    async create(@Body() createGroupDto: CreateGroupDto) {
        this.groupsService.create(createGroupDto);
    }
}

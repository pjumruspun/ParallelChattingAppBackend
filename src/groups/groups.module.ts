import { Module } from '@nestjs/common';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service'; 
import { MongooseModule } from '@nestjs/mongoose';
import { GroupSchema }  from './groups.schema';
import { DatabaseModule } from '../database/database.module';
import { groupProviders } from './group.providers';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Group', schema: GroupSchema }]),
        DatabaseModule,
    ],
    controllers: [GroupsController],
    providers: [
        GroupsService,
        ...groupProviders,
    ],
    exports: [GroupsService],
})
export class GroupsModule {}
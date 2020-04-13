import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service'; 
import { MongooseModule } from '@nestjs/mongoose';
import { MessageSchema }  from './messages.schema';
import { DatabaseModule } from '../database/database.module';
import { messageProviders } from './message.providers';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Message', schema: MessageSchema }]),
        DatabaseModule,
    ],
    controllers: [MessagesController],
    providers: [
        MessagesService,
        ...messageProviders,
    ],
    exports: [MessagesService],
})
export class MessagesModule {}
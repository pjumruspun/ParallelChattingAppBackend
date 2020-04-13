import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesController } from './messages/messages.controller';
import { MessagesService } from './messages/messages.service';
import { MessagesModule } from './messages/messages.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Message } from './messages/interfaces/message.interface';
import { DatabaseModule } from './database/database.module';
import { ClientsController } from './clients/clients.controller';
import { ClientsService } from './clients/clients.service';
import { ClientsModule } from './clients/clients.module';

@Module({
    imports: [
        MessagesModule,
        MongooseModule.forRoot('mongodb://localhost/nest'),
        ClientsModule,
        //DatabaseModule,
  ],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule {}

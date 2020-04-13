import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesController } from './messages/messages.controller';
import { MessagesService } from './messages/messages.service';
import { MessagesModule } from './messages/messages.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Message } from './messages/interfaces/message.interface';
import { DatabaseModule } from './database/database.module';

@Module({
    imports: [
        MessagesModule,
        MongooseModule.forRoot('mongodb://localhost/nest'),
        //DatabaseModule,
  ],
  controllers: [AppController, ],
  providers: [AppService, ],
})
export class AppModule {}

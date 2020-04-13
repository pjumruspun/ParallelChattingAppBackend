import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service'; 
import { MongooseModule } from '@nestjs/mongoose';
import { ClientSchema }  from './clients.schema';
import { DatabaseModule } from '../database/database.module';
import { clientProviders } from './client.providers';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Client', schema: ClientSchema }]),
        DatabaseModule,
    ],
    controllers: [ClientsController],
    providers: [
        ClientsService,
        ...clientProviders,
    ],
    exports: [ClientsService],
})
export class ClientsModule {}
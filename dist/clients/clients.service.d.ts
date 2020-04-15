import { Model } from 'mongoose';
import { Client } from './interface/client.interface';
import { CreateClientDto } from './dto/create-client-dto';
export declare class ClientsService {
    private clientModel;
    constructor(clientModel: Model<Client>);
    create(createClientDto: CreateClientDto): Promise<Client>;
    findAll(): Promise<Client[]>;
    findOne(id: String): import("mongoose").DocumentQuery<Client, Client, {}>;
    update(id: String, createClientDto: CreateClientDto): import("mongoose").DocumentQuery<Client, Client, {}>;
    deleteById(id: String): import("mongoose").DocumentQuery<Client, Client, {}>;
    hasClient(id: String): boolean;
}

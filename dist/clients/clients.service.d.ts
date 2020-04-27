import { Model } from 'mongoose';
import { Client } from './interface/client.interface';
import { CreateClientDto } from './dto/create-client-dto';
export declare class ClientsService {
    private clientModel;
    constructor(clientModel: Model<Client>);
    create(createClientDto: CreateClientDto): Promise<Client>;
    findAll(): Promise<Client[]>;
    findByName(name: string): Promise<Client>;
    findOne(id: String): Promise<Client>;
    update(id: String, createClientDto: CreateClientDto): Promise<Client>;
    deleteById(id: String): Promise<Client>;
    hasClient(id: String): Promise<boolean>;
    isJoined(clientid: String, groupid: String): Promise<any>;
}

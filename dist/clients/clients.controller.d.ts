import { ClientsService } from './clients.service';
import { Client } from './interface/client.interface';
import { CreateClientDto } from './dto/create-client-dto';
export declare class ClientsController {
    private clientsService;
    constructor(clientsService: ClientsService);
    findAll(): Promise<Client[]>;
    findOne(id: string): string;
    create(createClientDto: CreateClientDto): Promise<void>;
}

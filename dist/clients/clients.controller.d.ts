import { ClientsService } from './clients.service';
import { Client } from './interface/client.interface';
import { CreateClientDto } from './dto/create-client-dto';
import { GroupsService } from 'src/groups/groups.service';
export declare class ClientsController {
    private clientsService;
    private groupService;
    constructor(clientsService: ClientsService, groupService: GroupsService);
    findAll(): Promise<Client[]>;
    findOne(id: string): string;
    create(createClientDto: CreateClientDto): Promise<Client>;
    update(id: String, updateClientDto: CreateClientDto): Promise<Client>;
    addmember(memberid: String, groupid: String): Promise<any>;
    removemember(memberid: String, groupid: String): Promise<any>;
    setjoinstatus(memberid: String, groupid: String, bool: Boolean): Promise<any>;
    setlastmsg(memberid: String, groupid: String, messageid: String): Promise<any>;
    delete(id: String): Promise<Client>;
}

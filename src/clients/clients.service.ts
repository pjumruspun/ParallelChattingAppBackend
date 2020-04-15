import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Client } from './interface/client.interface';
import { CreateClientDto } from './dto/create-client-dto';

@Injectable()
export class ClientsService {
    constructor(
        @Inject('CLIENT_MODEL') private clientModel: Model<Client>
    ){}

    async create(createClientDto: CreateClientDto): Promise<Client> {
        const createdClient = new this.clientModel(createClientDto);
        return await createdClient.save();
    }

    async findAll() {
        return await this.clientModel.find().exec ();
    }

    async findOne(id: String){
        return await this.clientModel.findById(id);
    }

    async update(id: String, createClientDto: CreateClientDto) {
        await this.clientModel.findByIdAndUpdate(id, createClientDto);
        return await this.clientModel.findById(id);
        
    }

    async deleteById(id: String) {
        return await this.clientModel.findByIdAndDelete(id);
    }

    async hasClient(id: String){
        var found = await this.clientModel.findOne({ _id: id }) != null;
        // console.log(found);
        return found;
    }
}

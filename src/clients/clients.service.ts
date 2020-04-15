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
        return createdClient.save();
    }

    findAll() {
        return this.clientModel.find().exec();
    }

    findOne(id: String){
        return this.clientModel.findById(id);
    }

    update(id: String, createClientDto: CreateClientDto) {
        return this.clientModel.findByIdAndUpdate(id, createClientDto);
    }

    deleteById(id: String) {
        return this.clientModel.findByIdAndDelete(id);
    }

    hasClient(id: String){
        var found = this.clientModel.findOne({ _id: id }) != null;
        // console.log(found);
        return found;
    }
}

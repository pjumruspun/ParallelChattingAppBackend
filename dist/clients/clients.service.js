"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let ClientsService = class ClientsService {
    constructor(clientModel) {
        this.clientModel = clientModel;
    }
    async create(createClientDto) {
        const createdClient = new this.clientModel(createClientDto);
        return await createdClient.save();
    }
    async findAll() {
        return await this.clientModel.find().exec();
    }
    async findByName(name) {
        return await this.clientModel.findOne({ name: name });
    }
    async findOne(id) {
        return await this.clientModel.findOne({ _id: id });
    }
    async update(id, createClientDto) {
        await this.clientModel.findByIdAndUpdate(id, createClientDto);
        return await this.clientModel.findById(id);
    }
    async deleteById(id) {
        return await this.clientModel.findByIdAndDelete(id);
    }
    async deleteAll() {
        var deletedClients = [];
        var allClients = await this.findAll();
        allClients.forEach(client => {
            deletedClients.push(client);
            this.deleteById(client._id);
        });
        return deletedClients;
    }
    async hasClient(id) {
        var found = await this.clientModel.findOne({ _id: id }) != null;
        return found;
    }
    async isJoined(clientid, groupid) {
        var client = await this.clientModel.findOne({ _id: clientid });
        var groupList = client.group;
        var targetGroupJoiningStatus;
        groupList.forEach(group => {
            if (String(group.group_id) == groupid) {
                targetGroupJoiningStatus = group.join;
            }
        });
        return targetGroupJoiningStatus;
    }
};
ClientsService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('CLIENT_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ClientsService);
exports.ClientsService = ClientsService;
//# sourceMappingURL=clients.service.js.map
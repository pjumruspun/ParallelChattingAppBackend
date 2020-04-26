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
const clients_service_1 = require("./clients.service");
const create_client_dto_1 = require("./dto/create-client-dto");
const swagger_1 = require("@nestjs/swagger");
const mongoose_1 = require("mongoose");
const groups_service_1 = require("../groups/groups.service");
let ClientsController = class ClientsController {
    constructor(clientsService, groupService) {
        this.clientsService = clientsService;
        this.groupService = groupService;
    }
    async findAll() {
        return this.clientsService.findAll();
    }
    findOne(id) {
        return 'This API returns a client with id = ' + id + '!';
    }
    async create(createClientDto) {
        return await this.clientsService.create(createClientDto);
    }
    async update(id, updateClientDto) {
        return await this.clientsService.update(id, updateClientDto);
    }
    async addmember(memberid, groupid) {
        var createClientDto = [];
        createClientDto = await this.clientsService.findOne(memberid);
        if (this.groupService.hasGroup(groupid)) {
            var group = {
                _id: new mongoose_1.Types.ObjectId,
                group_id: groupid,
                join: true
            };
            if (true) {
                var dupe = false;
                for (var i = 0; i < createClientDto.group.length; ++i) {
                    console.log(createClientDto.group[i].group_id);
                    if (createClientDto.group[i].group_id == groupid) {
                        dupe = true;
                        console.log("FOUND DUPE");
                    }
                }
                if (!dupe)
                    createClientDto.group.push(group);
                else
                    return "Duplicate group id";
                await this.clientsService.update(memberid, createClientDto);
                return createClientDto;
            }
            else {
                return "Duplicate group id";
            }
        }
        else
            return "Invalid group id";
    }
    async removemember(memberid, groupid) {
        var createClientDto = [];
        createClientDto = await this.clientsService.findOne(memberid);
        if (this.groupService.hasGroup(groupid)) {
            var group = {
                _id: new mongoose_1.Types.ObjectId,
                group_id: groupid,
                join: true
            };
            if (true) {
                for (var i = 0; i < createClientDto.group.length; ++i) {
                    if (createClientDto.group[i].group_id == groupid) {
                        createClientDto.group.splice(i, 1);
                        --i;
                    }
                }
                await this.clientsService.update(memberid, createClientDto);
                return createClientDto;
            }
            else {
                return "Duplicate group id";
            }
        }
        else
            return "Invalid group id";
    }
    async setjoinstatus(memberid, groupid, bool) {
        var createClientDto = [];
        createClientDto = await this.clientsService.findOne(memberid);
        if (this.groupService.hasGroup(groupid)) {
            if (true) {
                for (var i = 0; i < createClientDto.group.length; ++i) {
                    console.log(createClientDto.group[i].group_id);
                    if (createClientDto.group[i].group_id == groupid) {
                        createClientDto.group[i].join = bool;
                    }
                }
                await this.clientsService.update(memberid, createClientDto);
                return createClientDto;
            }
            else {
                return "Duplicate group id";
            }
        }
        else
            return "Invalid group id";
    }
    async setlastmsg(memberid, groupid, messageid) {
        var createClientDto = [];
        createClientDto = await this.clientsService.findOne(memberid);
        if (this.groupService.hasGroup(groupid)) {
            if (true) {
                for (var i = 0; i < createClientDto.group.length; ++i) {
                    if (createClientDto.group[i].group_id == groupid) {
                        createClientDto.group[i].last_message_id = messageid;
                    }
                }
                await this.clientsService.update(memberid, createClientDto);
                return createClientDto;
            }
            else {
                return "Duplicate group id";
            }
        }
        else
            return "Invalid group id";
    }
    async delete(id) {
        return this.clientsService.deleteById(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "findAll", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], ClientsController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    swagger_1.ApiBody({ type: create_client_dto_1.CreateClientDto }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_client_dto_1.CreateClientDto]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "create", null);
__decorate([
    common_1.Put('/:id'),
    swagger_1.ApiBody({ type: create_client_dto_1.CreateClientDto }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_client_dto_1.CreateClientDto]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "update", null);
__decorate([
    __param(0, common_1.Param('memberid')), __param(1, common_1.Param('groupid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "addmember", null);
__decorate([
    __param(0, common_1.Param('memberid')), __param(1, common_1.Param('groupid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "removemember", null);
__decorate([
    common_1.Put('/setjoinstatus/:memberid/:groupid/:bool'),
    __param(0, common_1.Param('memberid')), __param(1, common_1.Param('groupid')), __param(2, common_1.Param('bool')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Boolean]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "setjoinstatus", null);
__decorate([
    common_1.Put('/setlastmsg/:memberid/:groupid/:messageid'),
    __param(0, common_1.Param('memberid')), __param(1, common_1.Param('groupid')), __param(2, common_1.Param('messageid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "setlastmsg", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientsController.prototype, "delete", null);
ClientsController = __decorate([
    swagger_1.ApiTags('Clients'),
    common_1.Controller('clients'),
    __metadata("design:paramtypes", [clients_service_1.ClientsService, groups_service_1.GroupsService])
], ClientsController);
exports.ClientsController = ClientsController;
//# sourceMappingURL=clients.controller.js.map
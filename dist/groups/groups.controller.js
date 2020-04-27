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
const groups_service_1 = require("./groups.service");
const create_group_dto_1 = require("./dto/create-group.dto");
const swagger_1 = require("@nestjs/swagger");
const mongoose_1 = require("mongoose");
const clients_service_1 = require("../clients/clients.service");
const clients_controller_1 = require("../clients/clients.controller");
const messages_service_1 = require("../messages/messages.service");
let GroupsController = class GroupsController {
    constructor(groupsService, clientsService, clientController, messageService) {
        this.groupsService = groupsService;
        this.clientsService = clientsService;
        this.clientController = clientController;
        this.messageService = messageService;
    }
    async findAll() {
        return this.groupsService.findAll();
    }
    async findByName(name) {
        return this.groupsService.findByName(name);
    }
    findOne(id) {
        return this.groupsService.findOne(id);
    }
    async create(createGroupDto) {
        return this.groupsService.create(createGroupDto);
    }
    async addmember(groupid, memberid) {
        var updateGroupDto = [];
        var messages = await this.messageService.findByGroup(String(groupid));
        var last_message = messages[messages.length - 1];
        updateGroupDto = await this.groupsService.findOne(groupid);
        if (this.clientsService.hasClient(memberid)) {
            var member = new mongoose_1.Types.ObjectId(String(memberid));
            if (updateGroupDto.client.indexOf(member) == -1) {
                updateGroupDto.client.push(member);
                await this.groupsService.update(groupid, updateGroupDto);
                this.clientController.addmember(memberid, groupid);
                return updateGroupDto;
            }
            else
                return "Duplicate member id";
        }
        else
            return "Invalid member id";
    }
    async removemember(groupid, memberid) {
        var updateGroupDto = [];
        updateGroupDto = await this.groupsService.findOne(groupid);
        if (this.clientsService.hasClient(memberid)) {
            var member = new mongoose_1.Types.ObjectId(String(memberid));
            if (updateGroupDto.client.indexOf(member) != -1) {
                updateGroupDto.client.remove(member);
                this.clientController.removemember(memberid, groupid);
                await this.groupsService.update(groupid, updateGroupDto);
                return updateGroupDto;
            }
            else
                return "No member id in group";
        }
        else
            return "Invalid member id";
    }
    async addmessage(groupid, messageid) {
        var updateGroupDto = [];
        updateGroupDto = await this.groupsService.findOne(groupid);
        if (this.messageService.hasMessage(messageid)) {
            var message = new mongoose_1.Types.ObjectId(String(messageid));
            if (updateGroupDto.message.indexOf(message) == -1) {
                updateGroupDto.message.push(message);
                await this.groupsService.update(groupid, updateGroupDto);
                return updateGroupDto;
            }
            else
                return "Duplicate member id";
        }
        else
            return "Invalid member id";
    }
    async delete(id) {
        return this.groupsService.deleteById(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "findAll", null);
__decorate([
    common_1.Get('/findbyname/:name'),
    __param(0, common_1.Param('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "findByName", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_group_dto_1.CreateGroupDto]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "create", null);
__decorate([
    common_1.Put('/:groupid/client/add/:memberid'),
    __param(0, common_1.Param('groupid')), __param(1, common_1.Param('memberid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "addmember", null);
__decorate([
    common_1.Put('/:groupid/client/remove/:memberid'),
    __param(0, common_1.Param('groupid')), __param(1, common_1.Param('memberid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "removemember", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GroupsController.prototype, "delete", null);
GroupsController = __decorate([
    swagger_1.ApiTags('Groups'),
    common_1.Controller('groups'),
    __metadata("design:paramtypes", [groups_service_1.GroupsService,
        clients_service_1.ClientsService,
        clients_controller_1.ClientsController,
        messages_service_1.MessagesService])
], GroupsController);
exports.GroupsController = GroupsController;
//# sourceMappingURL=groups.controller.js.map
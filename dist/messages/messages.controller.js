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
const messages_service_1 = require("./messages.service");
const create_message_dto_1 = require("./dto/create-message.dto");
const swagger_1 = require("@nestjs/swagger");
const groups_controller_1 = require("../groups/groups.controller");
const clients_service_1 = require("../clients/clients.service");
const clients_controller_1 = require("../clients/clients.controller");
let MessagesController = class MessagesController {
    constructor(messagesService, groupController, clientService, clientController) {
        this.messagesService = messagesService;
        this.groupController = groupController;
        this.clientService = clientService;
        this.clientController = clientController;
    }
    async findAll() {
        return this.messagesService.findAll();
    }
    findOne(id) {
        return this.messagesService.findOne(id);
    }
    findbygroup(groupid) {
        return this.messagesService.findByGroup(groupid);
    }
    async read(clientid, groupid) {
        var join = await this.clientService.isJoined(clientid, groupid);
        console.log(join);
        if (join) {
            var lastMessage = await this.getlastmessage(groupid);
            console.log(lastMessage);
            console.log(lastMessage._id);
            this.clientController.setlastmsg(clientid, groupid, lastMessage._id);
        }
        return this.messagesService.findByGroup(groupid);
    }
    async create(createMessageDto) {
        const returnMessage = await this.messagesService.create(createMessageDto);
        if (createMessageDto.group != undefined) {
            this.groupController.addmessage(String(createMessageDto.group), returnMessage._id);
        }
        return returnMessage;
    }
    async update(id, updateMessageDto) {
        return await this.messagesService.update(id, updateMessageDto);
    }
    async getlastmessage(groupid) {
        var messageByGroup = await this.messagesService.findByGroup(groupid);
        var lastMessage = messageByGroup[messageByGroup.length - 1];
        return lastMessage;
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "findAll", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "findOne", null);
__decorate([
    common_1.Get('/findbygroup/:groupid'),
    __param(0, common_1.Param('groupid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "findbygroup", null);
__decorate([
    common_1.Get('/read/:clientid/:groupid'),
    __param(0, common_1.Param('clientid')), __param(1, common_1.Param('groupid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "read", null);
__decorate([
    swagger_1.ApiBody({ type: create_message_dto_1.CreateMessageDto }),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_message_dto_1.CreateMessageDto]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "create", null);
__decorate([
    swagger_1.ApiBody({ type: create_message_dto_1.CreateMessageDto }),
    common_1.Put('/:id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_message_dto_1.CreateMessageDto]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "update", null);
MessagesController = __decorate([
    swagger_1.ApiTags('Messages'),
    common_1.Controller('messages'),
    __metadata("design:paramtypes", [messages_service_1.MessagesService,
        groups_controller_1.GroupsController,
        clients_service_1.ClientsService,
        clients_controller_1.ClientsController])
], MessagesController);
exports.MessagesController = MessagesController;
//# sourceMappingURL=messages.controller.js.map
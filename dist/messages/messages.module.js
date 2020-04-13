"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const messages_controller_1 = require("./messages.controller");
const messages_service_1 = require("./messages.service");
const mongoose_1 = require("@nestjs/mongoose");
const messages_schema_1 = require("./messages.schema");
const database_module_1 = require("../database/database.module");
const message_providers_1 = require("./message.providers");
let MessagesModule = class MessagesModule {
};
MessagesModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Message', schema: messages_schema_1.MessageSchema }]),
            database_module_1.DatabaseModule,
        ],
        controllers: [messages_controller_1.MessagesController],
        providers: [
            messages_service_1.MessagesService,
            ...message_providers_1.messageProviders,
        ],
        exports: [messages_service_1.MessagesService],
    })
], MessagesModule);
exports.MessagesModule = MessagesModule;
//# sourceMappingURL=messages.module.js.map
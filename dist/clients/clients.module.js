"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const clients_controller_1 = require("./clients.controller");
const clients_service_1 = require("./clients.service");
const mongoose_1 = require("@nestjs/mongoose");
const clients_schema_1 = require("./clients.schema");
const database_module_1 = require("../database/database.module");
const client_providers_1 = require("./client.providers");
const groups_module_1 = require("../groups/groups.module");
let ClientsModule = class ClientsModule {
};
ClientsModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Client', schema: clients_schema_1.ClientSchema }]),
            database_module_1.DatabaseModule,
            common_1.forwardRef(() => groups_module_1.GroupsModule)
        ],
        controllers: [clients_controller_1.ClientsController],
        providers: [
            clients_service_1.ClientsService,
            ...client_providers_1.clientProviders,
        ],
        exports: [clients_service_1.ClientsService],
    })
], ClientsModule);
exports.ClientsModule = ClientsModule;
//# sourceMappingURL=clients.module.js.map
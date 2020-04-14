"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const groups_controller_1 = require("./groups.controller");
const groups_service_1 = require("./groups.service");
const mongoose_1 = require("@nestjs/mongoose");
const groups_schema_1 = require("./groups.schema");
const database_module_1 = require("../database/database.module");
const group_providers_1 = require("./group.providers");
let GroupsModule = class GroupsModule {
};
GroupsModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Group', schema: groups_schema_1.GroupSchema }]),
            database_module_1.DatabaseModule,
        ],
        controllers: [groups_controller_1.GroupsController],
        providers: [
            groups_service_1.GroupsService,
            ...group_providers_1.groupProviders,
        ],
        exports: [groups_service_1.GroupsService],
    })
], GroupsModule);
exports.GroupsModule = GroupsModule;
//# sourceMappingURL=groups.module.js.map
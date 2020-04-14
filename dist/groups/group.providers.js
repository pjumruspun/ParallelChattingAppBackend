"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const groups_schema_1 = require("./groups.schema");
exports.groupProviders = [
    {
        provide: 'GROUP_MODEL',
        useFactory: (connection) => connection.model('Group', groups_schema_1.GroupSchema),
        inject: ['DATABASE_CONNECTION'],
    }
];
//# sourceMappingURL=group.providers.js.map
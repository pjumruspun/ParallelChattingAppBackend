"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clients_schema_1 = require("./clients.schema");
exports.clientProviders = [
    {
        provide: 'CLIENT_MODEL',
        useFactory: (connection) => connection.model('Client', clients_schema_1.ClientSchema),
        inject: ['DATABASE_CONNECTION'],
    }
];
//# sourceMappingURL=client.providers.js.map
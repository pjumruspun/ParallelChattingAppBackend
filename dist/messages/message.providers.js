"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages_schema_1 = require("./messages.schema");
exports.messageProviders = [
    {
        provide: 'MESSAGE_MODEL',
        useFactory: (connection) => connection.model('Message', messages_schema_1.MessageSchema),
        inject: ['DATABASE_CONNECTION'],
    }
];
//# sourceMappingURL=message.providers.js.map
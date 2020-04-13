"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: () => mongoose.connect('mongodb://localhost/nest'),
    },
];
//# sourceMappingURL=database.providers.js.map
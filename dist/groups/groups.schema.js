"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
exports.GroupSchema = new mongoose.Schema({
    name: String,
    client: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Client'
        }],
    message: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Message'
        }]
});
//# sourceMappingURL=groups.schema.js.map
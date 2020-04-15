"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.ClientSchema = new mongoose.Schema({
    name: String,
    group: [
        {
            group_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Group',
            },
            last_message_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Message',
            },
            join: Boolean
        }
    ]
});
//# sourceMappingURL=clients.schema.js.map
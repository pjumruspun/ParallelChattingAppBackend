"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
exports.MessageSchema = new mongoose.Schema({
    content: String,
    timestamp: {
        type: Date,
        default: Date.now
    },
    sender: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Client'
    },
    group: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Group'
    },
});
//# sourceMappingURL=messages.schema.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
exports.MessageSchema = new mongoose.Schema({
    content: String,
    timestamp: Date,
    sender: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Client'
    },
    group: String,
});
//# sourceMappingURL=messages.schema.js.map
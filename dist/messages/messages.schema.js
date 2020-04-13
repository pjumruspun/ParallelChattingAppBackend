"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.MessageSchema = new mongoose.Schema({
    content: String,
    timestamp: Date,
    read: Boolean,
});
//# sourceMappingURL=messages.schema.js.map
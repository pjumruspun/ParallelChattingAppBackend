"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.MessageSchema = new mongoose.Schema({
    content: String,
    timestamp: Date,
});
//# sourceMappingURL=messages.schema.js.map
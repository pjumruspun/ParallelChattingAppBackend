"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.ClientSchema = new mongoose.Schema({
    name: String,
    group: [String],
});
//# sourceMappingURL=clients.schema.js.map
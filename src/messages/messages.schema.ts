import * as mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema({
    content: String,
    timestamp: Date,
});
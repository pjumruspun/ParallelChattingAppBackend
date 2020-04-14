import * as mongoose from 'mongoose';
import { Schema }  from 'mongoose';

export const MessageSchema = new mongoose.Schema({
    content: String,
    timestamp: Date,
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'Client'
    },
    group: String,
});
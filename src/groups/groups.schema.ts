import * as mongoose from 'mongoose';
import { Schema }  from 'mongoose';

export const GroupSchema = new mongoose.Schema({
    name: String,
    client: [{
        type: Schema.Types.ObjectId,
        ref: 'Client'
    }],
});
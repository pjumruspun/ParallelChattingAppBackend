import { Document } from 'mongoose';
export interface Client extends Document {
    readonly name: String;
    readonly group: [String];
}

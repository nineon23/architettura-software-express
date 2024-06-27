import mongoose from "mongoose";
import {GroupEntity} from "./group.entity";

export const groupSchema = new mongoose.Schema<GroupEntity>({
   groupName: String
});

groupSchema.virtual('members', {
    ref: 'Employee',
    localField: '_id',
    foreignField: 'groupId'
});

groupSchema.set('toJSON', {
    virtuals: true,
    transform: (_, ret) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});

groupSchema.set('toObject', {
    virtuals: true,
    transform: (_, ret) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});
export const GroupModel = mongoose.model<GroupEntity>('Group', groupSchema);
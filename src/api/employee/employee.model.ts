import mongoose from "mongoose";
import {EmployeeEntity} from "./employee.entity";

export const employeeSchema = new mongoose.Schema<EmployeeEntity>({
     name: String,
     groupId: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },
    });

employeeSchema.set('toJSON', {
    virtuals: true,
    transform: (_, ret) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});

employeeSchema.set('toObject', {
    virtuals: true,
    transform: (_, ret) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});

export const EmployeeModel = mongoose.model<EmployeeEntity>('Employee', employeeSchema);
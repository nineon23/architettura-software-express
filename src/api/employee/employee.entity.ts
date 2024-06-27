import {ObjectId} from "mongoose";
import {GroupEntity} from "../group/group.entity";

export interface EmployeeEntity {
    id?: string;
    name: string;
    groupId: string | ObjectId | GroupEntity;
}
import {GroupEntity} from "../group/group.entity";
import {GroupModel} from "../group/group.model";
import {EmployeeModel} from "./employee.model";
import {SingleMemberDTO} from "../group/group.dto";
import {EmployeeEntity} from "./employee.entity";
import {ObjectId} from "mongoose";

export class EmployeeService{

    async createEmployee(name: string, groupId: string| ObjectId){
        try {
            console.log(name + " " + groupId)
            const createEmployee = await EmployeeModel.create({name, groupId});
            const newEmployee = await EmployeeModel.findById<EmployeeEntity>(createEmployee.id).exec();
            return newEmployee!;
        } catch (exc) {
            console.log(exc)
        }
    }
}
export default new EmployeeService();
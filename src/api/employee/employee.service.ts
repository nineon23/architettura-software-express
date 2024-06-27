import {GroupEntity} from "../group/group.entity";
import {GroupModel} from "../group/group.model";
import {EmployeeModel} from "./employee.model";
import {SingleMemberDTO} from "../group/group.dto";
import {EmployeeEntity} from "./employee.entity";

export class EmployeeService{

    async createEmployee(name: string, groupId): Promise<EmployeeEntity> {

        const createEmployee = await EmployeeModel.create<EmployeeEntity>({name, groupId});
        const newEmployee = await EmployeeModel.findById<EmployeeEntity>(createEmployee.id).exec();
        return newEmployee!;

    }

}
export default new EmployeeService();
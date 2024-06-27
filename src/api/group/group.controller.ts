import {NextFunction, Request, Response} from "express";
import GroupService from "./group.service";
import {TypedRequest} from "../../utils/typed-request.interface";
import {AddGroupDTO} from "./group.dto";
import EmployeeService from "../employee/employee.service";


export const addGroup = async(
    req: TypedRequest<AddGroupDTO>,
    res: Response,
    next: NextFunction
) => {
    try {
        const members = req.body.members;

        const newGroup = await GroupService.createGroup(req.body.groupName);

        for (const member of members) {
            await EmployeeService.createEmployee(newGroup.id!, member);
        }

        res.json(newGroup);
    } catch (error) {
        next(error);
    }
}

export const getGroups = async(
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const groups = await GroupService.getGroups();
        res.json(groups);
    } catch (error) {
        next(error);
    }
}
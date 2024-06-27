import {NextFunction, Request, Response} from "express";
import GroupService from "./group.service";
import {TypedRequest} from "../../utils/typed-request.interface";
import {AddGroupDTO} from "./group.dto";


export const addGroup = async(
    req: TypedRequest<AddGroupDTO>,
    res: Response,
    next: NextFunction
) => {
    try {
        const members = req.body.members;

        const newGroup = await GroupService.createGroup(req.body.groupName);

        for con

        res.json(newGroup);
    } catch (error) {
        next(error);
    }
}

import {GroupEntity} from "./group.entity";
import {GroupModel} from "./group.model";
import {AlreadyExistError} from "../../errors/already-exist";

export class GroupService{

    async createGroup(groupName: string){
        try{
            const groupExist = await GroupModel.findOne({ groupName: groupName })
            if (groupExist) {
                throw new AlreadyExistError('Group Already Exists')
            }
            else{
                const newGroup = GroupModel.create({ groupName: groupName });
                return newGroup;
            }
        }
        catch (exc){
            console.log(exc)
        }
    }

    async getGroups(): Promise<GroupEntity[]> {
        const groups = GroupModel.find().populate("members");
        return groups;
    }

    async getByName(groupName: string):Promise<GroupEntity>{

        const group = await GroupModel.findOne<GroupEntity>({groupName}).populate("members")
        return group!
    }

}
export default new GroupService();
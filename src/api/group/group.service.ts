import {GroupEntity} from "./group.entity";
import {GroupModel} from "./group.model";
import {AddGroupDTO} from "./group.dto";

export class GroupService{

    async createGroup(groupName: string){

        try{

            const newGroup = GroupModel.create(groupName);
            return newGroup;
        }
        catch (exc){
            console.log(exc)
        }

    }

    async getGroups(): Promise<GroupEntity[]> {
        const groups = GroupModel.find().exec();
        return groups;
    }

}
export default new GroupService();
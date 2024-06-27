import {GroupEntity} from "./group.entity";
import {GroupModel} from "./group.model";
import {AddGroupDTO} from "./group.dto";

export class GroupService{

    async createGroup(groupName: string): Promise<GroupEntity> {


        const newGroup = GroupModel.create(groupName);
        return newGroup;
    }

}
export default new GroupService();
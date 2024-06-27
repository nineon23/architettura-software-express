import {IsArray, IsOptional, IsString} from "class-validator";

export class AddGroupDTO{

    @IsString()
    groupName: string;

    @IsArray()
    @IsOptional()
    members: string[];

}

export class SingleMemberDTO{

        @IsString()
        name: string;


}
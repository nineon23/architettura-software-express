import {IsArray, IsOptional, IsString} from "class-validator";

export class AddGroupDTO{

    @IsString()
    groupName: string;

    @IsArray()
    @IsOptional()
    members: SingleMemberDTO[];

}

export class SingleMemberDTO{

        @IsString()
        name: string;


}
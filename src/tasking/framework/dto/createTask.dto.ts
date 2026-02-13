import {IsInt, IsString, Min, Max, IsBoolean, IsOptional } from "class-validator";
    
export class CreateTaskDto{

    @IsString()
    title:string;

    @IsString()
    description:string;

    @Min(1)
    @Max(3)
    @IsInt()
    priority:number;

    @IsBoolean()
    isCompleted:boolean;
}

import {IsInt, IsString, Min, Max, IsBoolean, IsOptional } from "class-validator";
    
export class UpdateTaskDto{
    @IsOptional()
    @IsString()
    title:string;

    @IsOptional()
    @IsString()
    description:string;


    @IsOptional()
    @Min(1)
    @Max(3)
    @IsInt()
    priority:number;

    @IsOptional()
    @IsBoolean()
    isCompleted:boolean;
}
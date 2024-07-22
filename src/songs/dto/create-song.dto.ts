import { IsArray, IsDateString, IsMilitaryTime, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateSongDto {
    @IsString()
    @IsNotEmpty()
     title:string;

    @IsDateString()
    @IsNotEmpty()
     releasedDate:Date;

    @IsMilitaryTime()
    @IsNotEmpty()
     duration :Date;

    @IsString()
    @IsOptional()
    album:string

    @IsString()
    @IsOptional()
     lyrics:string;
}

import { IsArray, IsNotEmpty, IsString, } from "class-validator";

export class CreateAlbumDto{
    @IsString()
    @IsNotEmpty()
    title:string;

    @IsArray()
    @IsString({each:true})
    songs:string[];
}
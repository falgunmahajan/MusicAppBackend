import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { Album } from "src/albums/schemas/album.schema";

@Schema()
export class Song {
    @Prop({
        required:true
    })
    title:string;

    @Prop({
        required:true
    })
    releasedDate:Date;

    @Prop({
        required:true
    })
    duration:string;

    @Prop({type:Types.ObjectId,ref:"albums"})
    album:Album;

    @Prop()
    lyrics:string;
}

export const songsSchema = SchemaFactory.createForClass(Song);

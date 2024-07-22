import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { Song } from "src/songs/schemas/song.schema";

@Schema()
export class Album{
    @Prop({required:true})
    title:string;

    @Prop({type:[Types.ObjectId], ref:"songs"})
    songs:Song[]
}

export const albumSchema = SchemaFactory.createForClass(Album)
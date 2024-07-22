import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Album } from './schemas/album.schema';
import { Model } from 'mongoose';
import { CreateAlbumDto } from './dto/create-album.dto';
import { Song } from 'src/songs/schemas/song.schema';

@Injectable()
export class AlbumsService {
    constructor(@InjectModel(Album.name) private readonly albumModel:Model<Album>){}
    async create(createAlbumDto:CreateAlbumDto){
     const album = await this.albumModel.create(createAlbumDto)
     return album;
    }

    async findAll(){
        const albums = await this.albumModel.find().populate('songs',null,Song.name);
        return albums;
    }
}

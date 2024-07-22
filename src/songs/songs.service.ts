import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Song } from './schemas/song.schema';
import { Model } from 'mongoose';

@Injectable()
export class SongsService {
  constructor(
    @InjectModel(Song.name) private readonly songModel: Model<Song>,
  ) {}
  async create(createSongDto: CreateSongDto) {
    const song = await this.songModel.create(createSongDto);
    return song;
  }

  async findAll() {
    const songs = await this.songModel.find();
    return songs;
  }

  async findOne(id: string) {
    const song = await this.songModel.findById(id);
    return song;
  }

  update(id: number, updateSongDto: UpdateSongDto) {
    return `This action updates a #${id} song`;
  }

  async remove(id: string) {
    return await this.songModel.deleteOne({ _id: id });
  }
}

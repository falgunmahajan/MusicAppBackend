import { Module } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Song, songsSchema } from './schemas/song.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Song.name,schema:songsSchema }])],
  controllers: [SongsController],
  providers: [SongsService],
})
export class SongsModule {

  
}


import { Module } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumsController } from './albums.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Album, albumSchema } from './schemas/album.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Album.name, schema:albumSchema}])],
  providers: [AlbumsService],
  controllers: [AlbumsController]
})
export class AlbumsModule {}

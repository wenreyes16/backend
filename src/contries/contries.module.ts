import { Module } from '@nestjs/common';
import { ContriesService } from './contries.service';
import { ContriesController } from './contries.controller';

@Module({
  controllers: [ContriesController],
  providers: [ContriesService]
})
export class ContriesModule {}

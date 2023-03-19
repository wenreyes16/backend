import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContriesService } from './contries.service';
import { CreateContryDto } from './dto/create-contry.dto';
import { UpdateContryDto } from './dto/update-contry.dto';

@Controller('contries')
export class ContriesController {
  constructor(private readonly contriesService: ContriesService) {}

  @Post()
  create(@Body() createContryDto: CreateContryDto) {
    return this.contriesService.create(createContryDto);
  }

  @Get()
  findAll() {
    return this.contriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContryDto: UpdateContryDto) {
    return this.contriesService.update(+id, updateContryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contriesService.remove(+id);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';


const genero = [
  {
    id: 1,
    name: 'Masculino',
  },
  {
    id: 2,
    name: 'Femenino',
  },

];


@Injectable()
export class GeneroService {
  create(createGeneroDto: CreateGeneroDto) {
    return 'This action adds a new genero';
  }

  findAll() {
    return genero;
  }

  findOne(id: number) {
    return `This action returns a #${id} genero`;
  }

  update(id: number, updateGeneroDto: UpdateGeneroDto) {
    return `This action updates a #${id} genero`;
  }

  remove(id: number) {
    return `This action removes a #${id} genero`;
  }
}

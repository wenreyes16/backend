import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

const categorias = [
  {
    id: 1,
    name: 'camisas ',
  },
  {
    id: 2,
    name: 'zapatos',
  },
  {
    id: 3,
    name: 'pantalones',
  },
  {
    id: 4,
    name: 'vestidos',
  }
];

@Injectable()
export class CategoriasService {
  create(createCategoriaDto: CreateCategoriaDto) {
    return 'This action adds a new categoria';
  }

  findAll() {
    return categorias;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoria`;
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return `This action updates a #${id} categoria`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoria`;
  }
}

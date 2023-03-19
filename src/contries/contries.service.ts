import { Injectable } from '@nestjs/common';
import { CreateContryDto } from './dto/create-contry.dto';
import { UpdateContryDto } from './dto/update-contry.dto';


const db = [
  {
    id: 1,
    name: 'Argentina ',
  },
  {
    id: 2,
    name: 'Nicaragua',
  },
  {
    id: 3,
    name: 'Brasil',
  },
  {
    id: 4,
    name: 'Mexico',
  }
];

@Injectable()
export class ContriesService {
  create(createContryDto: CreateContryDto) {
    return 'This action adds a new contry';
  }

  findAll() {
    return db;
  }

  findOne(id: number) {
    return `This action returns a #${id} contry`;
  }

  update(id: number, updateContryDto: UpdateContryDto) {
    return `This action updates a #${id} contry`;
  }

  remove(id: number) {
    return `This action removes a #${id} contry`;
  }
}

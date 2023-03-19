import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
export declare class GeneroService {
    create(createGeneroDto: CreateGeneroDto): string;
    findAll(): {
        id: number;
        name: string;
    }[];
    findOne(id: number): string;
    update(id: number, updateGeneroDto: UpdateGeneroDto): string;
    remove(id: number): string;
}

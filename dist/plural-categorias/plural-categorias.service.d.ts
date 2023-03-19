import { CreatePluralCategoriaDto } from './dto/create-plural-categoria.dto';
import { UpdatePluralCategoriaDto } from './dto/update-plural-categoria.dto';
export declare class PluralCategoriasService {
    create(createPluralCategoriaDto: CreatePluralCategoriaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePluralCategoriaDto: UpdatePluralCategoriaDto): string;
    remove(id: number): string;
}

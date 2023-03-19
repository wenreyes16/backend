import { PluralCategoriasService } from './plural-categorias.service';
import { CreatePluralCategoriaDto } from './dto/create-plural-categoria.dto';
import { UpdatePluralCategoriaDto } from './dto/update-plural-categoria.dto';
export declare class PluralCategoriasController {
    private readonly pluralCategoriasService;
    constructor(pluralCategoriasService: PluralCategoriasService);
    create(createPluralCategoriaDto: CreatePluralCategoriaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePluralCategoriaDto: UpdatePluralCategoriaDto): string;
    remove(id: string): string;
}

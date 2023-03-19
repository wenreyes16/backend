import { ContriesService } from './contries.service';
import { CreateContryDto } from './dto/create-contry.dto';
import { UpdateContryDto } from './dto/update-contry.dto';
export declare class ContriesController {
    private readonly contriesService;
    constructor(contriesService: ContriesService);
    create(createContryDto: CreateContryDto): string;
    findAll(): {
        id: number;
        name: string;
    }[];
    findOne(id: string): string;
    update(id: string, updateContryDto: UpdateContryDto): string;
    remove(id: string): string;
}

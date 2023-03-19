import { CreateContryDto } from './dto/create-contry.dto';
import { UpdateContryDto } from './dto/update-contry.dto';
export declare class ContriesService {
    create(createContryDto: CreateContryDto): string;
    findAll(): {
        id: number;
        name: string;
    }[];
    findOne(id: number): string;
    update(id: number, updateContryDto: UpdateContryDto): string;
    remove(id: number): string;
}

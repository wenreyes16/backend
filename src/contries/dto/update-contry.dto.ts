import { PartialType } from '@nestjs/mapped-types';
import { CreateContryDto } from './create-contry.dto';

export class UpdateContryDto extends PartialType(CreateContryDto) {}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateContryDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_contry_dto_1 = require("./create-contry.dto");
class UpdateContryDto extends (0, mapped_types_1.PartialType)(create_contry_dto_1.CreateContryDto) {
}
exports.UpdateContryDto = UpdateContryDto;
//# sourceMappingURL=update-contry.dto.js.map
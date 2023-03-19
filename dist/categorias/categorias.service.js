"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriasService = void 0;
const common_1 = require("@nestjs/common");
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
let CategoriasService = class CategoriasService {
    create(createCategoriaDto) {
        return 'This action adds a new categoria';
    }
    findAll() {
        return categorias;
    }
    findOne(id) {
        return `This action returns a #${id} categoria`;
    }
    update(id, updateCategoriaDto) {
        return `This action updates a #${id} categoria`;
    }
    remove(id) {
        return `This action removes a #${id} categoria`;
    }
};
CategoriasService = __decorate([
    (0, common_1.Injectable)()
], CategoriasService);
exports.CategoriasService = CategoriasService;
//# sourceMappingURL=categorias.service.js.map
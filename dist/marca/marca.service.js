"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarcaService = void 0;
const common_1 = require("@nestjs/common");
const marca = [
    {
        id: 1,
        name: ' Lacoste',
    },
    {
        id: 2,
        name: 'Adidas',
    },
    {
        id: 3,
        name: 'Nike',
    },
    {
        id: 4,
        name: 'Gess',
    }
];
let MarcaService = class MarcaService {
    create(createMarcaDto) {
        return 'This action adds a new marca';
    }
    findAll() {
        return marca;
    }
    findOne(id) {
        return `This action returns a #${id} marca`;
    }
    update(id, updateMarcaDto) {
        return `This action updates a #${id} marca`;
    }
    remove(id) {
        return `This action removes a #${id} marca`;
    }
};
MarcaService = __decorate([
    (0, common_1.Injectable)()
], MarcaService);
exports.MarcaService = MarcaService;
//# sourceMappingURL=marca.service.js.map
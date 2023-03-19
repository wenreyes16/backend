"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContriesService = void 0;
const common_1 = require("@nestjs/common");
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
let ContriesService = class ContriesService {
    create(createContryDto) {
        return 'This action adds a new contry';
    }
    findAll() {
        return db;
    }
    findOne(id) {
        return `This action returns a #${id} contry`;
    }
    update(id, updateContryDto) {
        return `This action updates a #${id} contry`;
    }
    remove(id) {
        return `This action removes a #${id} contry`;
    }
};
ContriesService = __decorate([
    (0, common_1.Injectable)()
], ContriesService);
exports.ContriesService = ContriesService;
//# sourceMappingURL=contries.service.js.map
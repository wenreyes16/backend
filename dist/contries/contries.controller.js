"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContriesController = void 0;
const common_1 = require("@nestjs/common");
const contries_service_1 = require("./contries.service");
const create_contry_dto_1 = require("./dto/create-contry.dto");
const update_contry_dto_1 = require("./dto/update-contry.dto");
let ContriesController = class ContriesController {
    constructor(contriesService) {
        this.contriesService = contriesService;
    }
    create(createContryDto) {
        return this.contriesService.create(createContryDto);
    }
    findAll() {
        return this.contriesService.findAll();
    }
    findOne(id) {
        return this.contriesService.findOne(+id);
    }
    update(id, updateContryDto) {
        return this.contriesService.update(+id, updateContryDto);
    }
    remove(id) {
        return this.contriesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_contry_dto_1.CreateContryDto]),
    __metadata("design:returntype", void 0)
], ContriesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContriesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContriesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_contry_dto_1.UpdateContryDto]),
    __metadata("design:returntype", void 0)
], ContriesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContriesController.prototype, "remove", null);
ContriesController = __decorate([
    (0, common_1.Controller)('contries'),
    __metadata("design:paramtypes", [contries_service_1.ContriesService])
], ContriesController);
exports.ContriesController = ContriesController;
//# sourceMappingURL=contries.controller.js.map
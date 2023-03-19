"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContriesModule = void 0;
const common_1 = require("@nestjs/common");
const contries_service_1 = require("./contries.service");
const contries_controller_1 = require("./contries.controller");
let ContriesModule = class ContriesModule {
};
ContriesModule = __decorate([
    (0, common_1.Module)({
        controllers: [contries_controller_1.ContriesController],
        providers: [contries_service_1.ContriesService]
    })
], ContriesModule);
exports.ContriesModule = ContriesModule;
//# sourceMappingURL=contries.module.js.map
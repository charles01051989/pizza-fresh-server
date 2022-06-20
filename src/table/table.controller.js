"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.TableController = void 0;
var common_1 = require("@nestjs/common");
var TableController = /** @class */ (function () {
    function TableController(tableService) {
        this.tableService = tableService;
    }
    TableController.prototype.findAll = function () {
        return this.tableService.findAll();
    };
    TableController.prototype.create = function (createTableDto) {
        return this.tableService.create(createTableDto);
    };
    __decorate([
        (0, common_1.Get)()
    ], TableController.prototype, "findAll");
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], TableController.prototype, "create");
    TableController = __decorate([
        (0, common_1.Controller)('table')
    ], TableController);
    return TableController;
}());
exports.TableController = TableController;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = __importDefault(require("../main"));
it("should get basic data on the country canada", () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield main_1.default.getCountry('canada');
    expect(data).toEqual({
        capital: 'Ottawa',
        region: 'Americas',
        population: 38005238
    });
}));
it("should get capitals of NAFTA countries", () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield main_1.default.getRegionCapitals('nafta');
    expect(data).toEqual([
        'Ottawa', 'Mexico City', 'Washington, D.C.'
    ]);
}));

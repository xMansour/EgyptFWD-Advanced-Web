"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookIndexRoute_1 = __importDefault(require("./api/bookIndexRoute"));
const bookShowRoute_1 = __importDefault(require("./api/bookShowRoute"));
const routes = express_1.default.Router();
routes.get('/books', bookIndexRoute_1.default);
routes.get('/books/:id', bookShowRoute_1.default);
routes.get('/', (req, res) => {
    console.log('Log:: Main route');
});
exports.default = routes;

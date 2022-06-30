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
const express_1 = __importDefault(require("express"));
const books_1 = require("../../models/books");
const store = new books_1.BookStore();
const bookIndexRoute = express_1.default.Router();
//index route - shows all table data
//_Throw away - when used before a function argument it signals that we are not going to use that argument.
bookIndexRoute.use((_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield store.index();
    res.json(books);
    console.log("Middleware started");
    next();
}));
bookIndexRoute.get('/', (req, res) => {
    console.log('Log:: BookIndex Route');
});
exports.default = bookIndexRoute;

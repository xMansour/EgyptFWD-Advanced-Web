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
Object.defineProperty(exports, "__esModule", { value: true });
const books_1 = require("../models/books");
const store = new books_1.BookStore();
describe("Book Model", () => {
    it("Should have an index method", () => {
        expect(store.index).toBeDefined();
    });
    it("index method should return a list of products", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.index();
        expect(result).toEqual([]);
    }));
    it('create method should add a book', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.create({
            id: 1,
            title: 'Bridge to Terabithia',
            total_pages: 250,
            author: 'Katherine Paterson',
            type: 'Childrens',
            summary: "lorem ipdasdsadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        });
        expect(result).toEqual({
            id: 1,
            title: 'Bridge to Terabithia',
            total_pages: 250,
            author: 'Katherine Paterson',
            type: 'Childrens',
            summary: "lorem ipdasdsadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        });
    }));
});

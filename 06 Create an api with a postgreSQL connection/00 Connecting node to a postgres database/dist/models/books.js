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
exports.BookStore = void 0;
const database_1 = __importDefault(require("../database"));
//The postgress representation of the database
class BookStore {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = 'SELECT * FROM books';
                const result = yield conn.query(sql);
                conn.release(); //to close the database connection
                return result.rows;
            }
            catch (error) {
                throw new Error("Can't get books " + error);
            }
        });
    }
    create(p) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = 'INSERT INTO books(title, total_pages, author, type, summary) VALUES($1, $2, $3, $4, $5) RETURNING*';
                const result = yield conn.query(sql, [p.title, p.total_pages, p.author, p.type, p.summary]);
                conn.release();
                return result.rows[0];
            }
            catch (error) {
                throw new Error("Can't get books " + error);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = 'DELETE * FROM books WHERE id = ($1)';
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (error) {
                throw new Error("Can't delete book " + error);
            }
        });
    }
    read(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = 'SELECT * FROM books WHERE id =($1)';
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (error) {
                throw new Error("Cant find element" + error);
            }
        });
    }
    update(id, title) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = "UPDATE books SET title=($2) where id=($1)";
                const results = yield conn.query(sql, [id, title]);
                conn.release();
                return results.rows[0];
            }
            catch (error) {
                throw new Error("Can't update element" + error);
            }
        });
    }
}
exports.BookStore = BookStore;

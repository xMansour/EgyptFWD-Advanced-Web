"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_1 = require("../../models/books");
const store = new books_1.BookStore();
const bookShowRoute = express_1.default.Router();
//show route - shows a specific row with the specified id
//_Throw away - when used before a function argument it signals that we are not going to use that argument.
/*bookShowRoute.use(async (req: express.Request, res: express.Response, next) => {
    //console.log("Body:" + req.body.id);
    //console.log("Query:" + req.query.id);
    //console.log("Params:" + req.params.id);

    //const book = await store.show(req.body.id);
    //res.json(book);
    //res.json(req);
    console.log("_____________________xxxxxxxxx________________________________");
    //console.log(req);
    console.log("_____________________xxxxxxxxx__________________________");


    console.log("Middleware started");
    next();
})*/
bookShowRoute.get('/:id', (req, res) => {
    console.log('Log:: BookIndex Route');
    console.log("______________________________________________________________");
    //console.log(req);
    console.log("______________________________________________________________");
    console.log("Body:" + req.body.id);
    console.log("Query:" + req.query.id);
    console.log("Params:" + req.params.id);
});
exports.default = bookShowRoute;

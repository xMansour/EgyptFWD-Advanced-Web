import express from 'express';
import { BookStore } from '../../models/books';
const store = new BookStore();
const bookIndexRoute = express.Router();

//index route - shows all table data
//_Throw away - when used before a function argument it signals that we are not going to use that argument.
const index = async (_req: express.Request, res: express.Response) => {
    const books = await store.index();
    res.json(books);
    console.log("Index Middleware started");
}


bookIndexRoute.get('/', index, (req: express.Request, res: express.Response): void => {
    console.log('Log:: BookIndex Route');
});

export default bookIndexRoute;

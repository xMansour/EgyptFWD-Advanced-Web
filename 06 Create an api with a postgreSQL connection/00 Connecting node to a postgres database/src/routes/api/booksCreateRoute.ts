import express from 'express';
import { BookStore } from '../../models/books';

const store = new BookStore();
const booksCreateRoute = express.Router();
//show route - shows a specific row with the specified id
//_Throw away - when used before a function argument it signals that we are not going to use that argument.
const create = async (req: express.Request, res: express.Response) => {
    //const book = await store.show(req.params.id);
    //res.json(book);
    console.log("Create Middleware started");
}


booksCreateRoute.post('/', create, (req: express.Request, res: express.Response): void => {
});

export default booksCreateRoute;

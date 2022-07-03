import express from 'express';
import { BookStore } from '../../models/books';

const store = new BookStore();
const bookShowRoute = express.Router();
//show route - shows a specific row with the specified id
//_Throw away - when used before a function argument it signals that we are not going to use that argument.
const show = async (req: express.Request, res: express.Response) => {
    //const book = await store.show(req.params.id);
    //res.json(book);
    console.log("Show Middleware started");
}


bookShowRoute.get('/', (req: express.Request, res: express.Response): void => {
    console.log('Log:: BookIndex Route');
    res.send(req.params);

    console.log("Params:" + req.params.id);

});

export default bookShowRoute;

import express from 'express';
import { Book, BookStore } from '../models/books';
//import booksCreateRoute from './api/booksCreateRoute';
const store = new BookStore();


const routes = express.Router();

const index = async (req: express.Request, res: express.Response) => {
    const result = await store.index();
    res.json(result);
}

const show = async (req: express.Request, res: express.Response) => {
    const result = await store.show(req.params.id);
    res.json(result);
}

const create = async (req: express.Request, res: express.Response) => {
    const book: Book = {
        id: 0,
        title: "Clean Code",
        total_pages: 250,
        author: "Martin",
        type: "Software enginnering",
        summary: "How to write clean code"
    }
    const result = await store.create(book);
    res.json(result);
}


const update = async (req: express.Request, res: express.Response) => {
    const result = await store.update(req.params.id, String(req.query.title));
    res.json(result);
}

const remove = async (req: express.Request, res: express.Response) => {
    const result = await store.delete(req.params.id);
    res.json(result);
}

routes.get('/books', index);
routes.get('/books/:id', show);
routes.post('/books', create);
routes.put("/books/:id", update)
routes.delete("/books/:id", remove);
routes.get('/', (req: express.Request, res: express.Response) => {
    console.log('Log:: Main route');
});

export default routes;

import express from 'express';
import { User, UserStore } from '../models/user';

const routes = express.Router();
const store = new UserStore();
const index = async (req: express.Request, res: express.Response) => {
    const result = await store.index();
    res.json(result);
    console.log("Index Route");

}

const create = async (req: express.Request, res: express.Response) => {
    const user: User = {
        userName: String(req.query.userName),
        password_digest: String(req.query.password)
    }
    const result = await store.create(user);
    res.json(result);
    console.log("Create Route");
}

const authenticate = async (req: express.Request, res: express.Response) => {
    const user: User = {
        userName: String(req.query.userName),
        password_digest: String(req.query.password)
    }
    const result = await store.authenticate(user);
    res.json(result);
    console.log("Authenticate Route");

}

routes.get('/users', index);
routes.post('/users', create);
routes.get('/users/auth', authenticate);




export default routes;
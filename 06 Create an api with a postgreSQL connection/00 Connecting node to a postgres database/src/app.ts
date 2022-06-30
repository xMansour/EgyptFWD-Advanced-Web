import express from 'express';
import cors from 'cors';
import { Book, BookStore } from './models/books';
import routes from './routes/routes';
import bodyParser from 'body-parser';

var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
const app = express();
app.use(cors(corsOptions));
//app.use(bodyParser.json())
app.use("/", routes);

const port: number = 3000;
app.listen(port, (): void => {
    console.log(`Server started at 127.0.0.1:${port}`);
})
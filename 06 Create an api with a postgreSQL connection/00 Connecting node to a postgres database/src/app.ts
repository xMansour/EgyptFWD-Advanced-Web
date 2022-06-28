import express from 'express';

const app = express();
const port: number = 3000;

app.get("/", (req: express.Request, res: express.Response): void => {
    res.send("Server Working");
})


app.listen(port, (): void => {
    console.log(`Server started at 127.0.0.1:${port}`);
})
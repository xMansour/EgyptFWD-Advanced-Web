"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes/routes"));
var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
const app = (0, express_1.default)();
app.use((0, cors_1.default)(corsOptions));
app.use("/", routes_1.default);
const port = 3000;
/*

//create route - creates new row
app.post("/books", (_req: express.Request, res: express.Response) => {
    const book: Book = {
        id: 0,
        title: "Clean Code",
        total_pages: 250,
        author: "Martin",
        type: "Software enginnering",
        summary: "How to write clean code"
    }
    try {
        res.send("this is the create route")
    } catch (error) {
        res.status(400);
        res.json(error)
    }
})


//edit route - to update a row with the specified id
app.put("/books/:id", (req: express.Request, res: express.Response) => {
    const book: Book = {
        id: Number(req.params.id),
        title: "Clean Code",
        total_pages: 250,
        author: "Martin",
        type: "Software enginnering",
        summary: "How to write clean code"
    }
    try {
        res.send("this is the edit route of item with id: " + req.params.id)
    } catch (error) {
        res.status(400)
        res.json(error)
    }
})



//delete route - to delete a row with the specified id
app.delete("/books/:id", (req: express.Request, res: express.Response) => {
    try {
        res.send("this is the delete route of item with id: " + req.params.id)
    } catch (err) {
        res.status(400)
        res.json(err)
    }
})

*/
app.listen(port, () => {
    console.log(`Server started at 127.0.0.1:${port}`);
});

import { Book, BookStore } from "../models/books";

const store = new BookStore();

describe("Book Model", () => {
    it("Should have an index method", () => {
        expect(store.index).toBeDefined();
    });
    it("index method should return a list of products", async () => {
        const result = await store.index();
        expect(result).toEqual([]);
    })
    it('create method should add a book', async () => {
        const result = await store.create({
            id: 0,
            title: "Clean Code",
            total_pages: 250,
            author: "Martin",
            type: "Software enginnering",
            summary: "How to write clean code"
        });
        expect(result).toEqual({
            id: result.id,
            title: "Clean Code",
            total_pages: 250,
            author: "Martin",
            type: "Software enginnering",
            summary: "How to write clean code"

        });
    });
})
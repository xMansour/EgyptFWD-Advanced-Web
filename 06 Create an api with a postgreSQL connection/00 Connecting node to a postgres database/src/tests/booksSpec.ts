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
            id: 1,
            title: 'Bridge to Terabithia',
            total_pages: 250,
            author: 'Katherine Paterson',
            type: 'Childrens',
            summary: "lorem ipdasdsadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        });
        expect(result).toEqual({
            id: 1,
            title: 'Bridge to Terabithia',
            total_pages: 250,
            author: 'Katherine Paterson',
            type: 'Childrens',
            summary: "lorem ipdasdsadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"

        });
    });
})
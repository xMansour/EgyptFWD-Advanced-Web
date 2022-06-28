import Client from '../database';

export type Book = {
    id: Number;
    title: string;
    total_pages: Number;
    author: string;
    type: string;
    summary: string;
}


//The postgress representation of the database
export class BookStore {
    async index(): Promise<Book[]> {
        try {
            const conn = await Client.connect();
            const sql = 'SELECT * FROM books'
            const result = await conn.query(sql);
            conn.release(); //to close the database connection
            return result.rows;
        } catch (error) {
            throw new Error("Can't get books " + error);
        }
    }


    async create(p: Book): Promise<Book> {
        try {
            const conn = await Client.connect();
            const sql = 'INSERT INTO books(title, total_pages, author, type, summary) VALUES($1, $2, $3, $4, $5) RETURNING*';
            const result = await conn.query(sql, [p.title, p.total_pages, p.author, p.type, p.summary]);
            conn.release();
            return result.rows[0];
        } catch (error) {
            throw new Error("Can't get books " + error);
        }

    }

    async delete(id: string): Promise<Book> {
        try {
            const conn = await Client.connect();
            const sql = 'DELETE * FROM books WHERE id = ($1)'
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        } catch (error) {
            throw new Error("Can't delete book " + error);
        }
    }

    async read(id: string): Promise<Book> {
        try {
            const conn = await Client.connect();
            const sql = 'SELECT * FROM books WHERE id =($1)';
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        } catch (error) {
            throw new Error("Cant find element" + error);

        }
    }

    async update(id: string, title: string): Promise<Book> {
        try {
            const conn = await Client.connect();
            const sql = "UPDATE books SET title=($2) where id=($1)";
            const results = await conn.query(sql, [id, title]);
            conn.release();
            return results.rows[0];
        } catch (error) {
            throw new Error("Can't update element" + error);

        }
    }


}
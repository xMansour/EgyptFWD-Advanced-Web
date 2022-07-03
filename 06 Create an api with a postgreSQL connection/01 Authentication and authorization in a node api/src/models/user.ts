import client from "../database";
import bcrypt from 'bcrypt';
const saltRounds = 10;

const encrypt = (password: string, saltRounds: number) => {
    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {

        });
    });
}
export type User = {
    //id: Number;
    userName: string;
    password_digest: string;
}

export class UserStore {
    async index(): Promise<User> {
        try {
            const conn = await client.connect();
            const sql = "SELECT * FROM users";
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (error) {
            throw new Error("Can't read users: " + error);
        }
    }


    async create(user: User): Promise<User> {
        try {
            const conn = await client.connect();
            const sql = "INSERT INTO users (userName, password_digest) values($1, $2) RETURNING *";
            const hashedPassword = bcrypt.hashSync(user.password_digest, saltRounds);
            console.log(hashedPassword);
            const result = await conn.query(sql, [user.userName, hashedPassword]);
            conn.release();
            return result.rows[0];
        } catch (error) {
            throw new Error("Can't create user " + user.userName + " Error: " + error);
        }
    }

    async authenticate(user: User): Promise<User | null> {
        const conn = await client.connect();
        const sql = "SELECT * FROM users where userName=($1)";
        const result = await conn.query(sql, [user.userName]);
        if (result.rows.length) {
            const resultUser = result.rows[0];
            if (bcrypt.compareSync(user.password_digest, resultUser.password_digest))
                return user;
        }

        return null;


    }
}
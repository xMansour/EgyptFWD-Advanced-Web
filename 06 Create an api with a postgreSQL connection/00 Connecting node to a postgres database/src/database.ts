import { Pool } from 'pg';
import dotenv from 'dotenv';

//line initializes the environment variables. You can't access the env vars unless this line exists in your code, it typically goes as close to the beginning of the program as possible.
dotenv.config();

const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_TEST_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    NODE_ENV
} = process.env;

console.log(typeof NODE_ENV);
console.log(NODE_ENV);
console.log(NODE_ENV?.length);

let client;
if (NODE_ENV === "dev") {
    //Pool is a connection to the database
    console.log("1");

    client = new Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD
    })
}

if (NODE_ENV === "test") {
    console.log("2");

    //Pool is a connection to the database
    client = new Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_TEST_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD
    })
}
console.log(client);

export default client;
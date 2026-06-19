import sqlite3 from "sqlite3";

export class Database {

    private static instance: sqlite3.Database;

    private constructor() {}

    public static getInstance(): sqlite3.Database {

        if (!Database.instance) {

            Database.instance = new sqlite3.Database("./database.sqlite");

            Database.instance.run(`
                CREATE TABLE IF NOT EXISTS users (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT,
                    lastName TEXT,
                    age INTEGER,
                    document TEXT UNIQUE,
                    city TEXT,
                    country TEXT,
                    language TEXT,
                    type TEXT,
                    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
                )
            `);
        }

        return Database.instance;
    }
}
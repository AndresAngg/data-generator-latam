import { Database } from "./Database";
import { Person } from "../models/Person";

export class UserRepository {

    private db = Database.getInstance();

    save(user: Person): Promise<void> {

        return new Promise((resolve, reject) => {

            this.db.run(
                `
                INSERT INTO users
                (
                    name,
                    lastName,
                    age,
                    document,
                    city,
                    country,
                    language,
                    type
                )
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                `,
                [
                    user.name,
                    user.lastName,
                    user.age,
                    user.document,
                    user.city,
                    user.country,
                    user.language,
                    user.constructor.name
                ],
                (err) => {

                    if (err) reject(err);
                    else resolve();

                }
            );

        });

    }

    getAll(): Promise<any[]> {

        return new Promise((resolve, reject) => {

            this.db.all(
                `
                SELECT
                    id,
                    name,
                    lastName,
                    age,
                    document,
                    city,
                    country,
                    language,
                    type
                FROM users
                `,
                [],
                (err, rows) => {
                    if (err) reject(err);
                    else resolve(rows || []);
                }
            );

        });

    }

    findByDocument(document: string): Promise<any> {

        return new Promise((resolve, reject) => {

            this.db.get(
                "SELECT * FROM users WHERE document = ?",
                [document],
                (err, row) => {

                    if (err) reject(err);
                    else resolve(row);

                }
            );

        });

    }

    deleteByDocument(document: string): Promise<void> {

        return new Promise((resolve, reject) => {

            this.db.run(
                "DELETE FROM users WHERE document = ?",
                [document],
                (err) => {

                    if (err) reject(err);
                    else resolve();

                }
            );

        });

    }

    deleteAll(): Promise<void> {

        return new Promise((resolve, reject) => {

            this.db.run(
                "DELETE FROM users",
                [],
                (err) => {

                    if (err) reject(err);
                    else resolve();

                }
            );

        });

    }

}
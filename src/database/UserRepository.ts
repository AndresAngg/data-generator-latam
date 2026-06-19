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

}
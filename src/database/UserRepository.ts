import { Database } from "./Database";
import { Person } from "../models/Person";

export class UserRepository {
  private db = Database.getInstance();

  saveUser(user: Person): Promise<void> {
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

  async save(users: Person[]): Promise<void> {
    const total = users.length;
    let saved = 0;
    const chunkSize = Math.max(1, Math.floor(total / 5));

    for (let i = 0; i < total; i += chunkSize) {
      const chunk = users.slice(i, i + chunkSize);
      await Promise.all(
        chunk.map((u) =>
          this.saveUser(u).catch((err) => {
            console.error("Error saving:", err);
            throw err;
          })
        )
      );
      saved += chunk.length;
      console.log(`Saved ${Math.min(saved, total)}/${total}`);
    }
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
      this.db.get("SELECT * FROM users WHERE document = ?", [document], (err, row) => {
        if (err) reject(err);

        else resolve(row);

      });
    });
  }

  deleteByDocument(document: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.run("DELETE FROM users WHERE document = ?", [document], (err) => {
        if (err) reject(err);
        
        else resolve();
      
      });
    });
  }

  deleteAll(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.run("DELETE FROM users", [], (err) => {
        if (err) reject(err);
        
        else resolve();
      
      });
    });
  }
}
import { Person } from "../models/Person";
import { PersonFactory } from "../factories/PersonFactory";

export class DataGeneratorService {
  private usedDocuments = new Set<string>();
  private usedNames = new Set<string>();

  generateUsers(quantity: number): Person[] {
    const users: Person[] = [];
    while (users.length < quantity) {
      const isCompany = Math.random() < 0.3;
      let user: Person;
      const age = this.randomAge();

      if (isCompany) {
        const document = this.generateCompanyDocument();
        user = PersonFactory.createCompany(document, age);
      } else {

        const document = this.generatePersonDocument(age);
        user = PersonFactory.createNaturalPerson(document, age);
      }

      const fullName = `${user.name}-${user.lastName}`;

      if (this.usedNames.has(fullName)) continue;

      this.usedNames.add(fullName);
      users.push(user);
    }
    return users;
  }

  private randomAge(): number {
    return Math.floor(Math.random() * (79 - 11 + 1)) + 11;
  }

  private generateCompanyDocument(): string {
    let document: string;

    do {
      document = "9" + Math.floor(10000000 + Math.random() * 90000000);
    } while (this.usedDocuments.has(document));

    this.usedDocuments.add(document);
    return document;
  }

  private generatePersonDocument(age: number): string {
    let document: string;
    do {

      if (age < 18) {
        document = String(11000000 + Math.floor(Math.random() * 100000));

      } else {
        const digits = Math.floor(Math.random() * 3) + 9;
        document = "";
        for (let i = 0; i < digits; i++) {
          document += Math.floor(Math.random() * 10);
        }
      }
    } while (this.usedDocuments.has(document));
    
    this.usedDocuments.add(document);
    return document;
  }
}
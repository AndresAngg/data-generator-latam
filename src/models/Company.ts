import { Person } from "./Person";

export class Company extends Person {

    generateDocument(): string {
        return this.document;
    }

}
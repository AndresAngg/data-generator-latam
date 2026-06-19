import { Person } from "./Person";

export class NaturalPerson extends Person {

    generateDocument(): string {
        return this.document;
    }

}
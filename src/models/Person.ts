export abstract class Person {
    constructor(
        public name: string,
        public lastName: string,
        public age: number,
        public document: string,
        public city: string,
        public country: string,
        public language: string
    ) {}

    abstract generateDocument(): string;
}
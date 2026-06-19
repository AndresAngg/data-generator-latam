export abstract class Person {

    private _document: string;

    constructor(
        public name: string,
        public lastName: string,
        public age: number,
        document: string,
        public city: string,
        public country: string,
        public language: string
    ) {

        this._document = document;

    }

    public get document(): string {
        return this._document;
    }

    abstract generateDocument(): string;

}
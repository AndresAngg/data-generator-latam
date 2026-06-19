import { faker } from "@faker-js/faker";
import { NaturalPerson } from "../models/NaturalPerson";
import { Company } from "../models/Company";
import { countries } from "../utils/Countries";

export class PersonFactory {

    static createNaturalPerson( document: string, age: number ): NaturalPerson {

        const location = countries[Math.floor(Math.random() * countries.length)] ?? {
            city: "",
            country: "",
            language: ""
        };

        return new NaturalPerson(
            faker.person.firstName(),
            faker.person.lastName(),
            age,
            document,
            location.city,
            location.country,
            location.language
        );

    }

    static createCompany( document: string, age: number ): Company {

        const location = countries[Math.floor(Math.random() * countries.length)] ?? {
                city: "",
                country: "",
                language: ""
            };

        return new Company(
            faker.company.name(),
            "",
            age,
            document,
            location.city,
            location.country,
            location.language
        );

    }

}
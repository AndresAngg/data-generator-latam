import { createObjectCsvWriter } from "csv-writer";
import { Person } from "../models/Person";

export class CsvExportService {

    async export(users: Person[]) {

        const csvWriter = createObjectCsvWriter({

            path: "./output/users.csv",

            header: [
                { id: "name", title: "NAME" },
                { id: "lastName", title: "LASTNAME" },
                { id: "age", title: "AGE" },
                { id: "document", title: "DOCUMENT" },
                { id: "city", title: "CITY" },
                { id: "country", title: "COUNTRY" },
                { id: "language", title: "LANGUAGE" }
            ]
        });

        await csvWriter.writeRecords(users);

    }

}
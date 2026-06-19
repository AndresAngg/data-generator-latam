import { DataGeneratorService } from "./src/services/DataGeneratorService";

const generator =
    new DataGeneratorService();

const users =
    generator.generateUsers(80);

console.table(users);
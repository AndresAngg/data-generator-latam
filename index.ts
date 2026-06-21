import { DataGeneratorService } from "./src/services/DataGeneratorService";
import { UserRepository } from "./src/database/UserRepository";
import { CsvExportService } from "./src/services/CsvExportService";
import { EmailService } from "./src/services/EmailService";
import dotenv from "dotenv";

async function main() {

    dotenv.config();
    const action = process.argv[2];
    const repository = new UserRepository();

    switch (action) {
        case "generate":

            const quantity = Number(process.argv[3]) || 10;
            const generator = new DataGeneratorService();
            const users = generator.generateUsers(quantity);

            await repository.save(users);

            const csv = new CsvExportService();
            await csv.export(users);

            const emailService = new EmailService();

            console.log(`${quantity} usuarios generados`);
            await emailService.sendCsv();

            break;

        case "list":

            const allUsers = await repository.getAll();
            console.table(allUsers);

            break;

        case "clean":

            await repository.deleteAll();
            console.log("Base de datos limpiada");

            break;

        default:
            console.log(`
Comandos disponibles:

npm run start generate 100
npm run start list
npm run start clean`);

    }

}

main();
import nodemailer from "nodemailer";

export class EmailService {

    async sendCsv() {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({

            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO,
            subject: "CSV generado",
            text: "Archivo CSV generado automáticamente.",
            attachments: [
                {
                    filename: "users.csv",
                    path: "./output/users.csv"
                }
            ]

        });

    }

}
import nodemailer from 'nodemailer';
import {EmployeeService} from "../../api/employee/employee.service";

export class NotificationService{

    async sendNotification(processType: string, orderId: string){
        if (processType === 'production'){
            this.sendProductionNotification(orderId)
        }
        else if (processType === 'shipping'){
            this.sendShippingNotification(orderId)
        }
        else{
            console.log('Invalid Process Type')
        }
    }

    async sendProductionNotification(orderId: string){
        const commercialMail = "commerciale@yopmail.com"

        const mailSubject = `Ordine ${orderId} in produzione`;
        const mailHtml = `
<html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
            }
            .container {
                width: 80%;
                margin: auto;
                padding: 20px;
                border: 1px solid #ddd;
                border-radius: 5px;
                background-color: #f9f9f9;
            }
            .header {
                text-align: center;
                padding: 10px;
                color: #444;
            }
            .content {
                margin-top: 20px;
                font-size: 16px;
                color: #666;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1 class="header">Notifica di Produzione</h1>
            <p class="content">L'ordine ${orderId} è entrato in produzione. Si prega di monitorare il processo e di assicurarsi che venga rispettato il programma di produzione.</p>
            <p class="content">Per qualsiasi problema o ritardo, si prega di comunicarlo tempestivamente.</p>
        </div>
    </body>
</html>
`;

        this.sendEmail(commercialMail, mailSubject, mailHtml)
        console.log("Email sent to commercial")

    }

    async sendShippingNotification(orderId: string){
        const commercialMail = "commerciale@yopmail.com"
        const customerMail= "cliente@yopmail.com"

        const mailSubject = `Ordine ${orderId} in consegna`;
        const mailHtml = `
<html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
            }
            .container {
                width: 80%;
                margin: auto;
                padding: 20px;
                border: 1px solid #ddd;
                border-radius: 5px;
                background-color: #f9f9f9;
            }
            .header {
                text-align: center;
                padding: 10px;
                color: #444;
            }
            .content {
                margin-top: 20px;
                font-size: 16px;
                color: #666;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1 class="header">Notifica di Consegna</h1>
            <p class="content">L'ordine ${orderId} è entrato in produzione. Si prega di monitorare il processo e di assicurarsi che venga rispettato il programma di produzione.</p>
            <p class="content">Per qualsiasi problema o ritardo, si prega di comunicarlo tempestivamente.</p>
        </div>
    </body>
</html>
`;

        this.sendEmail(commercialMail, mailSubject, mailHtml)
        console.log("Email sent to commercial")
        this.sendEmail(customerMail, mailSubject, mailHtml)
        console.log("Email sent to customer")
    }

    async sendEmail(email: string, mailSubject: string, mailHtml: string) {

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'noreply.pigiamawork@gmail.com',
                pass: 'phgptwxgsnudfpfq'
            }
        });

        const mailOptions = {
            from: 'noreply.pigiamawork@gmail.com',
            to: email,
            subject: mailSubject,
            html: mailHtml
        };

        return transporter.sendMail(mailOptions);
    }
}
export default new NotificationService();




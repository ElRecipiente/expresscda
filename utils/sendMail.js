import NodeMailer from 'nodemailer';

const transporter = NodeMailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "a547e3bdb57abd",
        pass: "e0b3e2b442f7e3"
    }
});

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(to, subject, text, html) {

    try {
        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: '"TruckBusters" <truckbusters@gmail.com>', // sender address
            to: `${to}, truckbusters@gmail.com`, // list of receivers
            subject: subject || "Confirmation de rendez-vous", // Subject line
            text: text || "Bonjour, merci pour votre prise de rendez vous.", // plain text body
            html: html || "<b>Bonjour, merci pour votre prise de rendez-vous.</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    } catch (error) {
        console.error("Erreur lors de l'envoi de l'e-mail :", error);
        throw error;
    }

}

export default sendMail;
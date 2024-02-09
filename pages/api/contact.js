import nodemailer from "nodemailer";

console.log(process.env)

export default async function ContactAPI(req, res){
    const {name, email, massage} = req.body;
    
    const user = "hepie.aerts@gmail.com";

    const data = {
        name, email, massage,
    };

    const transporter = nodemailer.createTransport({
        host: "smtp.forwardemail.net",
        port: 465,
        secure: true,
        auth: {
          user: user,
          pass: "bampa5-guqdoF-cofbir",
        },
    });

    try {
        const mail = await transporter.sendMail({
            from: user,
            to: "henripaerts@gmail.com",
            replyTo: email,
            subject: `Kontaktformular ausgefüllt von ${name}`,
            html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Nachricht: ${massage}</p>`
        })

        console.log("Nachricht gesendet:", mail.messageId )

        return res.status(200).json({massage: "erfolgreich"})
    } catch (error) {
        console.log(error)
        res.status(500).json({massage: "Deine Nachricht wurde nicht gesendet. Probiere es noch ein mal."})
    }

    ;
}
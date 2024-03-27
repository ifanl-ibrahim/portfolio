import { transporter, mailOptions } from "../../config/nodemailer";

const handler = async (req, res) => {
    if (req.method === "POST") {
        const data = req.body;
        if (!data.firstName || !data.lastName || !data.email || !data.message) {
            res.status(400).json({ message: 'Bad request' })
        }
        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: "Nouveau message du Portfolio",
                text: "Nouveau message du Portfolio",
                html: `
                    <h1>Message de ${data.firstName} ${data.lastName}</h1>
                    <p>${data.message}</p>
                    <h3>Coordonnées :</h3>
                    <b>E-mail :</b><p>${data.email}
                    <b>Téléphone :</b><p>${data.phone}
                `
            })

            return res.status(200).json({ success: true });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: error.message })
        }
    }

    res.status(400).json({ message: 'Bad request' })
};

export default handler;
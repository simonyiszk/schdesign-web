import nodemailer from "nodemailer";

const serviceAccount = JSON.parse(
	process.env.GMAIL_SERVICE_ACCOUNT ?? "{}",
) as ServceAccountFields;

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
if (serviceAccount.private_key === undefined) throw new Error("No private key");

const receiver = "hello+serviceEmail@schdesign.hu";

const emailTemplate = (fields: any) => {
	return `
  <html>
    <body>
        <div>
            <h1>Schdesign projekt megrendelés</h1>
            <h2>Megrendelő: ${fields.name} - ${fields.email} - ${fields.group} </h2>
            <h2>Üzenet</h2>
            <p>${fields.message}</p>
            </div>
        </body>
    </html>
  `;
};

export const sendEmail = async (content: any) => {
	try {
		const transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				type: "OAuth2",
				user: serviceAccount.service_email,
				serviceClient: "",
				privateKey: "",
			},
		});

		await transporter.verify();

		await transporter.sendMail({
			from: serviceAccount.service_email,
			to: receiver,
			subject: "Test email",
			text: emailTemplate(content),
		});

		console.log("success!");
		return {
			status: 200,
		};
	} catch (err) {
		console.log(err);
		return {
			status: 500,
			error: err,
		};
	}
};

type ServceAccountFields = {
	private_key: string;
	client_id: string;
	service_email: string;
	[key: string]: string;
};

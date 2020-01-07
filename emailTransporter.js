import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.GMAIL_ADDRESS,
		pass: process.env.GMAIL_PASSWORD,
	},
})

const mailOptions = {
	from: process.env.GMAIL_ADDRESS,
	to: process.env.GMAIL_OTHER_ADDRESS,
	subject: process.env.EMAIL_SUBJECT,
	text: 'That was easy!',
}

export const send = () => {
	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
			console.log(error)
		} else {
			console.log('Email sent: ' + info.response)
		}
	})
}

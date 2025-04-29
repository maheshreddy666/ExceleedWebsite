import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        // Parse the JSON body from the request
        const { name, emailAddress, contactNumber, company, message } = await request.json();

        const subject = "Request for a Demo";
        const details = `Contact details:
        Name: ${name}
        Email: ${emailAddress}
        Company: ${company}
        Contact Number: ${contactNumber}
        Message: ${message}`;

        // GODADY SETTINGS
        const transporter = nodemailer.createTransport({
            host: "smtpout.secureserver.net",
            port: 465,
            secure: true,
            auth: {
                user: process.env.USER,
                pass: process.env.PASS,
            },
        });

        // Define email options
        const mailOptions = {
            from: process.env.USER || '',
            to: process.env.TO || '', // Make sure to set this in your .env file
            cc:process.env.CC?.split(','),
            subject: subject,
            text: details,
            html: `<p>${details.replace(/\n/g, '<br>')}</p>`, // Convert new lines to <br> tags
        };

        // Send email
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true, message: "Thank you for contacting us!" });

    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ success: false, message: "Failed to send the email" }, { status: 500 });
    }
}

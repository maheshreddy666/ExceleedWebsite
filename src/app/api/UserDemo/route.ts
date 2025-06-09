import { NextResponse } from 'next/server';
// import dbConnection from '@/lib/db.Connect';
import nodemailer from 'nodemailer';
import dotenv from "dotenv"
// import DemoFormModel from "@/model/UserDemo"
dotenv.config()

export async function POST(request: Request) {
    // dbConnection()
    // Ensure the database connection is established
    try {
        // Parse the JSON body from the request
        const { name, emailAddress, contactNumber, company, message } = await request.json();

        // const UserDetails = await DemoFormModel.findOne({ emailAddress })

        // if (UserDetails) {
        //     return NextResponse.json({ message: "User already exists", status: 400 })
        // } else {

        // }

        // const NewUser = new DemoFormModel({
        //     name,
        //     emailAddress,
        //     company,
        //     contactNumber,
        //     message,
        // })

        // await NewUser.save()

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
        console.log({
            host: process.env.USER,
            to: process.env.TO,
            cc: process.env.CC,
        });
        // Define email options
        const mailOptions = {
            from: process.env.USER || '',
            to: process.env.TO || '', // thisone is the received mail of that user
            cc: process.env.CC?.split(','),
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

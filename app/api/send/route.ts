import { Resend } from "resend";
import { NextResponse, NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {

    try {
        const body = await req.json();
        const { name, email, subject, message } = body;


        if (!name || !email || !subject || !message) {
            return NextResponse.json({ message: "All fields are required." }, { status: 400 })
        }

        const { data, error } = await resend.emails.send({
           from: 'onboarding@resend.dev',
            to: 'official.codewithsohaib@gmail.com',
            replyTo: process.env.RECIPIENT_EMAIL,
            subject: `Portfolio Contact Form: ${subject}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        })

        // Check if Resend returned an error
        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }

        // Success response
        return NextResponse.json(
            { message: 'Email sent successfully', data },
            { status: 200 }
        );

    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }

}
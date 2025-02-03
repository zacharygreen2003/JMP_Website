import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email, message } = await req.json(); // Get user data

        if (!email || !name || !message) {
            return Response.json({ success: false, message: "All fields are required." });
        }

        // Create transporter (USE A SERVICE THAT DOESN'T REQUIRE AUTH)
        const transporter = nodemailer.createTransport({
            host: "smtp-relay.brevo.com", // Use a free service like Brevo (formerly Sendinblue)
            port: 587,
            secure: false,
            auth: {
                user: "your-brevo-email@example.com",  // Replace with your Brevo email
                pass: "your-brevo-api-key",           // Replace with your Brevo API Key
            },
        });

        // Email content
        const mailOptions = {
            from: `"${name}" <${email}>`,  // Shows as coming from the user
            to: "zacharygreen2003@gmail.com", // Your email
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            replyTo: email, // So when you hit "Reply," it goes to the user!
        };

        await transporter.sendMail(mailOptions); // Send the email

        return Response.json({ success: true, message: "Email sent successfully!" });

    } catch (error) {
        console.error("Error sending email:", error);
        return Response.json({ success: false, message: "Error sending email." });
    }
}

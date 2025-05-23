import { generateVerificationOtpEmailTemplate } from "./emailTemplates.js";
import { sendEmail } from "./sendEmail.js";

export async function sendVerificationCode(verificationCode, email, res) {
    try {
        const message = generateVerificationOtpEmailTemplate(verificationCode);
        sendEmail({
            email,
            subject: 'verification code (Bookworm Library Management System)',
            message,
        });
        res.status(200).json({
            success: true,
            // message: `Verification code sent to Email: ${email}`,
            message: `Verification code sent to Email:`,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Verification code failed to send',
        });
    }
}
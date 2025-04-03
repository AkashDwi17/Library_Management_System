export function generateVerificationOtpEmailTemplate(otpCode) {
    return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            text-align: center;
            padding: 20px;
        }
        .email-container {
            max-width: 400px;
            background: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            margin: auto;
        }
        .otp {
            font-size: 24px;
            font-weight: bold;
            color: #007bff;
            letter-spacing: 2px;
            margin: 20px 0;
        }
        .footer {
            font-size: 12px;
            color: #666;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <h2>🔐 Verify Your Email</h2>
        <p>Use the following OTP to verify your email. This code is valid for 10 minutes.</p>
        <div class="otp">${otpCode}</div>
        <p>If you didn't request this, please ignore this email.</p>
        <div class="footer">© 2025 BookWorm Team. All rights reserved.</div>
    </div>
</body>
</html>`;
}

export function generateForgotPasswordEmailTemplate(resetPasswordUrl) {
    return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Password</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            text-align: center;
            padding: 20px;
        }
        .email-container {
            max-width: 400px;
            background: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            margin: auto;
        }
        .reset-button {
            display: inline-block;
            background-color: #007bff;
            color: #ffffff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
        }
        .footer {
            font-size: 12px;
            color: #666;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <h2>🔒 Reset Your Password</h2>
        <p>Click the button below to reset your password. This link is valid for 30 minutes.</p>
        <a href="${resetPasswordUrl}" class="reset-button">Reset Password</a>
        <p>If you didn't request this, please ignore this email.</p>
        <div class="footer">© 2025 BookWorm Team. All rights reserved.</div>
    </div>
</body>
</html>`;
}

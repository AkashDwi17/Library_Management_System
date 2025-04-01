export function generateVerificationOtpEmailTemplate(otpCode) {
    return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OTP Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            text-align: center;
            padding: 20px;
        }
        .email-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
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
    <div class="email-wrapper">
        <div class="email-container">
            <h2>🔐 Your OTP Code</h2>
            <p>Use the following OTP to verify your email. This code is valid for 10 minutes.</p>
            <div class="otp">${otpCode}</div>
            <p>If you didn't request this, please ignore this email.</p>
            <div class="footer">© 2025 BookWorm Team. All rights reserved.</div>
        </div>
    </div>
</body>
</html>`;
}

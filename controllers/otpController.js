require("dotenv").config();
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  })

  const generateOTP = () => {
    return Math.floor(1000 + Math.random() * 9000);
  }

exports.sendOtp = async (req, res) => {
        const { email } = req.body;
        const otp = generateOTP(); 
        // Send OTP via email
        const mailOptions = {
          from: process.env.EMAIL,
          to: email,
          subject: "OTP Verification",
          text: `Your OTP is: ${otp}`,
        };
      
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ error: "Error sending OTP email" });
          } else {
            console.log("Email sent:", info.response);
            res.status(200).json({ message: "OTP sent successfully", otp });
          }
        });
}
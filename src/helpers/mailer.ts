import nodemailer from "nodemailer";
import UserModel from "@/models/userModel";
import bcryptjs from "bcryptjs";

export async function sendEmail({ email, emailtype, userId }: any) {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailtype === "Verify") {
      await UserModel.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailtype === "Reset") {
      await UserModel.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordExpiry: Date.now() + 3600000,
      });
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "992e90ed6af93e",
        pass: "f3f140784059be",
      },
    });

    // Compose the email
    const emailSubject =
      emailtype === "Verify" ? "Verify your account" : "Reset Your Password";
    const emailContent = `<p><a href="${process.env.DOMAIN}/${emailtype==="Verify"?"verifyEmail":"ResetPassword"}?token=${hashedToken}">Click here</a> to ${
      emailtype === "Verify" ? "verify your Email" : "reset your Password"
    }</p>`;

    const info = await transporter.sendMail({
      from: "sailajapuvala5125@gmail.com", // sender address
      to: email, // list of receivers
      subject: emailSubject,
      html: emailContent,
    });

    console.log("Message sent", info);
    return info
  } catch (error: any) {
    throw new Error(error.message);
  }
}

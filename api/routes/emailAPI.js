const { Router } = require("express");
const nodemailer = require("nodemailer");
const router = require("express").Router();

const sendEmail = (sender, body, subject) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: sender,
    to: process.env.MY_EMAIL,
    subject: subject,
    html: body,
  };

  transporter.sendMail(mailOptions, (err, res) => {
    if (err) {
      console.log("Error occured : " + err);
    } else {
      console.log(res);
    }
  });
};

router.post("/contactSend/", (req, res) => {
  res.send("email sent");
});

module.exports = sendEmail;

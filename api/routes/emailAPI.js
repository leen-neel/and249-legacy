const nodemailer = require("nodemailer");
const router = require("express").Router();

const sendEmail = async (mailOptions) => {
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

  try {
    await transporter.sendMail(mailOptions);
    return "done";
  } catch (error) {
    return "err";
  }
};

router.post("/contactSend/", async (req, res) => {
  const { sender, body, subject, name } = req.body.message;

  let mailOptions = {
    from: sender,
    to: process.env.MY_EMAIL,
    subject: subject,
    html: `<p>${body}</p> <br /> <p><b>From:</b> ${sender} - ${name}</p>`,
  };
  const email = await sendEmail(mailOptions);

  if (email == "done") {
    res.send("Email sent!");
  } else {
    res.status(500).send("Something went wrong.");
  }
});

module.exports = router;

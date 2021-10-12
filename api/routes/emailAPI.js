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
    let message = await transporter.sendMail(mailOptions);
    return "done";
  } catch (error) {
    return "err";
  }
};

router.get("/contactSend/", async (req, res) => {
  let mailOptions = {
    from: req.body.sender,
    to: process.env.MY_EMAIL,
    subject: req.body.subject,
    html: `${req.body.body} <br /> <b>From:</b> ${req.body.sender}`,
  };
  const email = await sendEmail(mailOptions);

  if (email == "done") {
    res.send("Email sent!");
  } else {
    res.status(500).send("Something went wrong.");
  }
});

module.exports = router;

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
  console.log(req.body.message);
  let mailOptions = {
    from: req.body.message.sender,
    to: process.env.MY_EMAIL,
    subject: req.body.message.subject,
    html: `${req.body.message.body} <br /> <b>From:</b> ${req.body.message.sender} - ${req.body.message.name}`,
  };
  const email = await sendEmail(mailOptions);

  if (email == "done") {
    res.send("Email sent!");
  } else {
    res.status(500).send("Something went wrong.");
  }
});

module.exports = router;

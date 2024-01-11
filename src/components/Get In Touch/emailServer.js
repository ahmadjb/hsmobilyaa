const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

const PORT = process.env.PORT || 3000;

app.post('/send-email', (req, res) => {
  const { name, email, phone, message } = req.body;

  // Configure the nodemailer transporter with your email server credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "ahmad119966.aa@gmail.com",
      pass: "",
    },
  });

  // Set up email data
  const mailOptions = {
    from: "ahmad119966.aa@gmail.com",
    to: "ahmad119966.aa@gmail.com",
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

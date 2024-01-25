const express = require("express");
const nodemailer = require('nodemailer');
const router = express.Router();

router.post("/sendEmail", async (req, res) => {

  // Extract email data from the request body
    const { name, email, subject, message } = req.body;

    const username = 'sevi.herrmi21@gmail.com';
    const password = 'vduh ivpy gpdd jxsc';

    const from = 'severin.herrmann@gmail.com';
    const to = 'seviherrmi@gmail.com';

    const title = 'myOwnWork: ' + subject;
    const text = name + '\n' + email + '\n\n' + message;

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: username,
        pass: password
      }
    });
    
    var mailOptions = {
      from: from,
      to: to,
      subject: title,
      text: text,
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    res.send('end')
  });

module.exports = router;
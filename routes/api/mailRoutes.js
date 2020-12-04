const router = require('express').Router();
const passport = require('../../config/passport');
const authMiddleware = require('../../config/middleware/authMiddleware');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport')
const creds = require('../../config/config')
const cors = require('cors');
const { response } = require('express');


const transport = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: creds.USER,
      pass: creds.PASS
    },
    ignoreTLS: true
  }));

const transporter = nodemailer.createTransport(transport)
console.log(transporter.options.host)

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages.')
    }
});

router.post('/send', (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    const content = `name: ${name} \n email: ${email} \n ${message}`

    const mail = {
        from: name,
        to: 'testcodeacct8476@gmail.com',
        subject: 'New Message from Contact Form',
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})

module.exports = router;
const router = require('express').Router();
const passport = require('../../config/passport');
const authMiddleware = require('../../config/middleware/authMiddleware');
const nodemailer = require('nodemailer');
const cors = require('cors');


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    auth: {
      user: "955abe59f5ad61",
      pass: "072d3363eaad77"
    }
  });

const transporter = nodemailer.createTransport(transport)

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
        to: '2103b98ead-8b020d@inbox.mailtrap.io',
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
const nodemailer = require('nodemailer');
var poolConfig = { service: 'gmail', auth: { user: 'catdoge484848@gmail.com', pass: 'uncuncunc7#' }};
var transporter = nodemailer.createTransport(poolConfig);


var registerMessage = {
    from: 'catdoge484848@gmail.com',
    to: 'j3530980@nwytg.net',
    subject: 'Patient Account Info',
    html: '<h3>Thank you for signing up!</h3><br><p> get them tenders boiii </p>',
                    
}

transporter.sendMail(registerMessage);
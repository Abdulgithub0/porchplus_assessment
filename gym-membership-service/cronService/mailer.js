const nodemailer = require('nodemailer');
const config = require('../config/config');

// set up mail service with neccessary json options
const transporter = nodemailer.createTransport({
  service: config.email.service,
  auth: {
    user: config.email.user,
    pass: config.email.pass
  }
});

/**
 * Handle mails sending to gym membership users
 * @params: {Object} - Object containing the membership user mailing data
 * @return: void
 */
const sendEmailReminder = async (emailObject) => {

  console.log("Email data has been recieved");
  const { to, subject, text, html } = emailObject;

  const mailOptions = {
    from: config.email.user,
    to,
    subject,
    text,
    html
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`****Email notification has been sent to ${to} !***\n`);
  } catch (err) {
    console.log(`***Failed to send email to ${to}**** reason: ${err.message}\n`);
  }
};

module.exports = {
  sendEmailReminder
};

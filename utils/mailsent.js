const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "kaalidash208@gmail.com",
    pass: "kxbs hhxj kxzr bbuj",
  },
});

exports.SendMail = async ({to, subject, html}) => {
  const info = await transporter.sendMail({
    from: '"👻" <sastoBajar@gmail.com>',
    to: to,
    subject: subject,
    html: html,
  });
  return info;
};

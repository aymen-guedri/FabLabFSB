import nodemailer from "nodemailer";

const sendMail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '465',
    secure: true,
    auth: {
      user: 'fablabfsb@gmail.com',
      pass: 'xuwzconeieghbgkp',
    },
  });

  const mailOptions = {
    from: 'fablabfsb@gmail.com',
    to: options.to,
    subject: options.subject,
    html: options.html,
  };

  await transporter.sendMail(mailOptions);
};

export default sendMail;

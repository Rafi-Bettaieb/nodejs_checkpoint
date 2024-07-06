var nodemailer = require('nodemailer');
//choosing my email and password
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mail',
        pass: 'mdp'
        }
});
//choosing the options
var send = {
    from : 'sender',
    to : 'reciever',
    subject : 'test',
    text : 'sending email with nodejs : checkpoint done'
};
//sending the mail
transporter.sendMail(send,function(error,data){
    if(error) console.log(error);
    else console.log('Email sent successfully');
})
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"mailme.charantej4@gmail.com",
        pass:'zlzxedyglfhnjnga'
    }
});

var mailOptions = {
    from:'mailme.charantej4@gmail.com',
    to:'pravin.consensus@gmail.com',
    subject:'Sending email using node.js',
    text:"task 3 Completed"
};

transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }else{
        console.log('Email Sent: '+info.response);
    }
});
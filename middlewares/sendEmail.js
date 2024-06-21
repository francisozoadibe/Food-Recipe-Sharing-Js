// in the utilities.js i will be using for random functions, such as: function send emails, genarate tokens, any function that performs random functions
const nodemailer = require("nodemailer")
const dotenv = require("dotenv")

const sendEmail = async(name, userEmail, subjectEmail, url)=>{
    try{
        // here i am setting up my transpoert, that is creation of the variable to send email and the service you want to use. the SEVICE, EMAIL & THE PASSWORD

        //create a mailing transport
        const mailerTransport = nodemailer.createTransport({
        // the service be interchanged with host
        service: "gmail",
        // but you use domain, some people use STP, Zoyo etc
        auth: {
            user: `${process.env.EMAIL}`,
            password: `${process.env.EAMIL_PASSWORD}`
            // for password, most user will ask you to do tow fact authentifications. to solve this issue, open your email are using, go to settings, then locate security, & locate 2-step authentification and turn it on. and create your inapp or app password and click, it will ask for normal email password and you enter the app password

            //NB the above two details Email and Passwoed should be in your dotenv file
            // you have successful define your email address and password
        }
        // the next thing is the email address you want to send to, subject and body of the email
    })
        // who you are mailing to

        // create email details to send to
        let mailDetails = {
            // from keyword defines who the email is coming from
            from: "info@accessbankyouthrive@scholarship.com",
            // here we are hardcoding but since it is only email coming from the company


            // to keyword defines who to=is the email going to
            to: userEmail, 
            // while userEmail is a dynamic, meaning ensure you pass it as an argument in the function
            // subject keyword is the subject of the email you ae sending to the receiver
            subject: emailSubject,//"Your account is created successful",
            // body of the message or main message, for some the use html and other formats
            html: `<div>
            <h1>hello ${name} Welcome to Youthrive Programm</h1>
            <p>The beneficiaries of this scholarship will learn backend developement from a genius who teach back end technology well. Our Best students will be given a job, and a good salary. Access Bank wishes to welcome you and wisshes you well in your learning process. Good Luck!</p>

            <a href=${url}>Click to Verify</a>
            <h6>Thanks</h6>

            </div>`
        }

        // ask your mail transport to send email details
        const reult = await mailerTransport.sendMail(mailDetails)

    }catch (error){
        return response.status(200).json({message:error.message})
    }
}



module.exports = {
    sendEmail
}
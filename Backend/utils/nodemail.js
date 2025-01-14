
import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()

export const mailSender = async(email,title,body)=>{
    try {
        let transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            }
        });     
        let info = await transporter.sendMail({
            from:`${email}`,
            to:'agarwaldaya336@gmail.com',
            subject:`Name: ${title}`,
            html:`Message: ${body}`
        })
        return info;
    } catch (error) {
        console.log(error)
    }
}

 
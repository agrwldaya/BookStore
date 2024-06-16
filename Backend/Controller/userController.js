import User from "../model/user_model.js";
import bcrypt from "bcrypt"
import { mailSender } from "../utils/nodemail.js";

// import mailSender from "../utils/nodemail.js"
 
export const Signup = async(req,res)=>{
 try {
      const {fullname,email,password} = req.body;

      const checkUser = await User.findOne({email});

      if(checkUser){
        return res.status(400).json({
               message:"User alredy registered!"
        })
    }
    const hashPassword = await bcrypt.hash(password,10);

    const newUser = await User.create({fullname,email,password:hashPassword});
    console.log(newUser);

    res.status(200).json({
        message:"Newuser created successfully!",
        user:{
            _id:newUser.id,
            fullname:newUser.fullname,
            email:newUser.email
           }
    })
 } catch (error) {
    console.log("Error in user creation: ",error);
    res.status(500).json({
        message:"Error in user creation",
    })
 }
}

// login

export const Login = async(req,res)=>{
    try {
         const {email,password} = req.body;
         const checkUser = await User.findOne({email});
   
         if(!checkUser){
           return res.status(400).json({
                  message:"User is not registered. Please Signup first!!"
           })
        }
        
       const decryptPassword = await bcrypt.compare(password,checkUser.password);
       
       if(!decryptPassword){
        return res.status(401).json({
            message:"Password is incorrect!"
         })}
   
       res.status(200).json({
           message:"Login successfully!",
           user:{
            _id:checkUser.id,
            fullname:checkUser.fullname,
            email:checkUser.email
           }
       })

    } catch (error) {
       console.log("Error in Login: ",error);
       res.status(500).json({
           message:"Error in Login",
       })
    }
   }
   
  //  send mail

  export const sendmail = async(req,res)=>{
    try {
         const {email,title,body} = req.body;

         await mailSender(email,title,body);

         res.json({
            success:true,
            message:"Message have send Successfullly!"
         })

    } catch (error) {
         console.log(error)
         res.json({
            success:false,
            message:"Error"
         })
    }
  }
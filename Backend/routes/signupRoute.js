import express from "express";
import { Signup,Login,sendmail } from "../Controller/userController.js";
const signupRoute = express.Router();

signupRoute.post('/signup',Signup);
signupRoute.post('/login',Login);
signupRoute.post('/sendmail',sendmail);

export default signupRoute;


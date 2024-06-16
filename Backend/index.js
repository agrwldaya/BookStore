import express from 'express'
import dotenv from "dotenv"
import dbconnect from "./Database/Database.js"
 import bookrouter from './routes/bookroute.js'
 import cors from "cors"
import signupRoute from './routes/signupRoute.js' 

dotenv.config()
const app = express()
app.use(express.json());
const PORT  = process.env.PORT || 4000 

app.use(cors());

app.listen(PORT,()=>{
    console.log(`app listening on port ${PORT}`);
})
dbconnect()

app.use('/api/v1',bookrouter);
app.use('/api/v1',signupRoute)
 
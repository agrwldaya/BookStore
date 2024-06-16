import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbconnect = async () => {
    try {
        await mongoose.connect(process.env.MongodbUrl, {
        });
        console.log("Database connected successfully!");
    } catch (error) {
        console.error("Error in database connection", error);
    }
};

export default dbconnect;

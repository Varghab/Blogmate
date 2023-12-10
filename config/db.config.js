import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config({
    path: '../.env.local'
})

export const connectToDatabase = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true,useUnifiedTopology:true});
        console.log("Connected to Database");
    } catch (error) {
        console.log("Something went wrong while connecting to database!");
    }
}

await connectToDatabase();

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb= async()=>{
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
       console.log(`Database successfully connected at ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("Error connecting DB",error);
        process.exit(1);
        
    }

}

export default connectDb;
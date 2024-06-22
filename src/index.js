// require("dotenv").config({path:"./env"})
import dotenv from "dotenv";
import connectDb from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./env" });

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`App connected and running at ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("App can not be connected", err);
  });














  
// (async()=>{
//     try {
//         mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//         app.on("error",(error)=>{
//             console.log("Can't connect to APP", error);
//             throw error;
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);

//         })

//     } catch (error) {
//         console.log("ERRR:",error);
//         throw error

//     }
// })()

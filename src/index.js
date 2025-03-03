// require('dotenv').config({path : './env'})
import dotenv from "dotenv"

import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import connectDB from "./db/index.js";
const app = express(); 

dotenv.config({
    path : './env'
})

//*second approach
connectDB()


//*first approach
// import express from "express";
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/{DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("error: ", error);
//       throw error;
//     });

//     app.listen(process.env.PORT,()=>{
//         console.log("App is listening on port :", {process.env.PORT});
        
//     })
//   } catch (error) {
//     console.error("ERROR : ", error);
//     throw error;
//   }
// })();

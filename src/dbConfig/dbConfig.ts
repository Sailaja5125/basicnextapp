<<<<<<< HEAD

import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection=mongoose.connection;
        connection.on("connected", ()=>{
            console.log("MongoDb Connected successfully");
        })
        connection.on("error", (error)=>{
            console.log("MongoDb error .please make sure mongo is running",error);
        })
    } catch (error) {
        console.log('something went wrong')
        console.log(error)
    }
=======
import { error } from "console";
import mongoose, { connection } from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection=mongoose.connection;
        connection.on("connected", ()=>{
            console.log("MongoDb Connected successfully");
        })
        connection.on("error", (error)=>{
            console.log("MongoDb error .please make sure mongo is running",error);
        })
    } catch (error) {
        console.log('something went wrong')
        console.log(error)
    }
>>>>>>> bccb9a0efa33673745379d2cccc70d1a1fe9c232
}
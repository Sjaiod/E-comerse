import mongoose from "mongoose";

export const connectApi=async()=>{
    try {
        mongoose.set(`strictQuery`,false)
        mongoose.set(`strictPopulate`,false)
        mongoose.connect("mongodb+srv://sajidsaj2008:20081114khulna@first.rsxcxda.mongodb.net/?retryWrites=true&w=majority&appName=FIRST").then(()=>{
        }).catch((err)=>{
            console.log(err);
        })

    } catch (error) {
        console.log(error);
    }
}
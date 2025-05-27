import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sterin:sterin453@cluster0.dekdm.mongodb.net/food-del').then(()=>console.log("DB connected"));

}
//mongodb+srv://sterin:sterin453@cluster0.dekdm.mongodb.net/food-del
import mongoose from "mongoose";

export const connectDB = async () => {
    mongoose
        .connect(process.env.MONGO_URI, {
            dbName: "LIBRARY_MANAGEMENT_SYSTEM",
        })
        .then(() => {
            console.log("Connected to Database");
        })
        .catch(error => {
            console.log("Error connecting to Database", error.message);
        });
};

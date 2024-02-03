import mongoose from "mongoose";

const mongoURI = process.env.MONGO_URI!;

const connectMongo = async () => mongoose.connect(mongoURI);
export default connectMongo;

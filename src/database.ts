import mongoose from "mongoose";
import 'dotenv/config';

const url: string = process.env.MONGODB_URL === undefined ? '' : process.env.MONGODB_URL;

export async function dbConnection() {
    await mongoose.connect(url);
}

export async function dbEnd() {
    await mongoose.disconnect();
}
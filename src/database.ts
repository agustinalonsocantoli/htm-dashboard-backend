import mongoose from "mongoose";
import 'dotenv/config';

const url: string = process.env.MONGODB_URL === undefined ? '' : process.env.MONGODB_URL;

export async function dbConnection() {
    await mongoose.connect(url)
    .then(() => {
        console.log('Database Connect');
    })
}

export async function dbEnd() {
    await mongoose.disconnect()
    .then(() => {
        console.log('Database Disconnect');
    });
}
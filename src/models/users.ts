import { Schema, model } from "mongoose";

export interface IntUser {
    src: String;
    name: String;
    email: String;
    start: Date;
    job: String;
    contact: String;
    status: String;
    password: String;
}

const UserSchema = new Schema<IntUser>({
    src: String,
    name: String,
    email: String,
    start: Date,
    job: String,
    contact: String,
    status: String,
    password: String,
});

const User = model('User', UserSchema);

export default User;
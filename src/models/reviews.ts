import { Schema, model } from "mongoose";

export interface IntReview {
    src: String;
    date: Date;
    customer: String;
    email: String;
    phone: String;
    affair: String;
    comment: String;
    archived: Boolean;
}

const ReviewSchema = new Schema<IntReview>({
    src: String,
    date: Date,
    customer: String,
    email: String,
    phone: String,
    affair: String,
    comment: String,
    archived: Boolean
});

const Review = model('Review', ReviewSchema);

export default Review;
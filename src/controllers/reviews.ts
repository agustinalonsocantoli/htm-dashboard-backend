import reviewsData from '../JSON/DataReviews.json';
import { Review } from '../models/reviews';

let reviewsController = {

    getReviews: async (_req: any, res: any): Promise<Review[]> => {
        const data = await res.json({reviews: reviewsData});

        return data
    },
    getReview: async (req: any, res: any): Promise<Review> => {
        const data = await res.json({review: reviewsData.find(review => review.id === req.params.id)});

        return data
    },
    newReview: async (req: any, res: any): Promise<Review> => {
        const data = await res.json ({success: true, review: req.body});

        return data
    },
    uptadeReview: async (_req: any, res: any): Promise<Review> => {
        const data = await res.json ({success: true});

        return data
    },
    deleteReview: async (_req: any, res: any): Promise<Review> => {
        const data = await res.json ({success: true});

        return data
    },
}

export default reviewsController;
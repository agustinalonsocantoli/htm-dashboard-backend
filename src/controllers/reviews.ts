import { Request, Response, NextFunction } from 'express';
import Review, { IntReview } from '../models/reviews';
import { dbConnection, dbEnd } from '../database';

const reviewsController = {

    getReviews: async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
        await dbConnection();

        const reviews: IntReview[] | unknown = await Review.find()
        .exec()
        .catch((e: Error) => next(e));

        try {
            res.status(200).json({
                message: "Reviews obtained successfully",
                data: reviews
            });

        } catch (err) {
            next(err);
            res.status(500).send({message: err});
        }
        
        await dbEnd();
    },
    getReview: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        await dbConnection();

        const review: IntReview | unknown = await Review.findOne({_id: req.params.id})
        .exec()
        .catch((e: Error) => next(e));

        try {
            res.status(200).json({
                message: "Review obtained successfully",
                data: review
            });

        } catch (err) {
            next(err);
            res.status(500).send({message: err});
        }
        
        await dbEnd();
    },
    newReview: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        await dbConnection();

        const newReview: IntReview | {} = {
            id: req.body.id,
            src: req.body.src,
            date: req.body.date,
            customer: req.body.customer,
            email: req.body.email,
            phone: req.body.phone,
            affair: req.body.affair,
            comment: req.body.comment,
            archived: req.body.archived,
        }

        await Review.create(newReview)
        .catch((e) => next(e));

        try {
            res.status(200).json({
                message: "Review created successfully",
                data: newReview
            })

        } catch (err) {
            next(err);
            res.status(500).send({message: err});
        }
        
        await dbEnd();
    },
    uptadeReview: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        await dbConnection();

        const editReview: IntReview | {} = {
            src: req.body.src,
            date: req.body.date,
            customer: req.body.customer,
            email: req.body.email,
            phone: req.body.phone,
            affair: req.body.affair,
            comment: req.body.comment,
            archived: req.body.archived,
        }

        await Review.findOneAndUpdate({_id: req.params.id}, editReview)
        .catch((e) => next(e));

        try {
            res.status(200).json({
                message: `Edit review Id-${req.params.id} successfully`,
                data: editReview
            })

        } catch (err) {
            next(err);
            res.status(500).send({message: err});
        }
        
        await dbEnd();
    },
    deleteReview: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        await dbConnection();

        await Review.findOneAndDelete({_id: req.params.id})
        .exec()
        .catch((e: Error) => next(e));

        try {
            res.status(200).json({
                message: `Review Id-${req.params.id} deleted successfully`
            })

        } catch (err) {
            next(err);
            res.status(500).send({message: err});
        }
        
        await dbEnd();
    },
}

export default reviewsController;
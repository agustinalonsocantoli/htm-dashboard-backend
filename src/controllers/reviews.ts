import reviewsData from '../JSON/DataReviews.json';
import { Request, Response } from 'express';

const reviewsController = {

    getReviews: (_req: Request, res: Response): Response | void => {
        try{
            
            return res.json({reviews: reviewsData});
        } catch(err) {
            
            res.send({message: "Error"});
            console.log(err);
        }
    },
    getReview: (req: Request, res: Response): Response | void => {
        try{
            
            return res.json({review: reviewsData.find(review => review.id === req.params.id)});
        } catch(err) {
            
            res.send({message: "Error"});
            console.log(err);
        }
    },
    newReview: (req: Request, res: Response): Response | void => {
        try{
            
            return res.json ({success: true, review: req.body});
        } catch(err) {
            
            res.send({message: "Error"});
            console.log(err);
        }
    },
    uptadeReview: (_req: Request, res: Response): Response | void => {
        try{
            
            return res.json ({success: true});
        } catch(err) {
            
            res.send({message: "Error"});
            console.log(err);
        }
    },
    deleteReview: (_req: Request, res: Response): Response | void => {
        try{

            return res.json ({success: true});
        } catch(err) {

            res.send({message: "Error"});
            console.log(err);
        }
    },
}

export default reviewsController;
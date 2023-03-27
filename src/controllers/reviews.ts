import { Request, Response, NextFunction } from 'express';
import { dbQuery } from '../database';
import { Review } from '../models/reviews';

const reviewsController = {

    getReviews: async (_req: Request, res: Response, next: NextFunction): Promise<any> => {
        try{
            const reviewsData: Review | unknown = dbQuery('SELECT * FROM reviews')
            
            res.json(reviewsData);
        } catch(err) {
            next(err)
            res.send({message: err});
        }
    },
    getReview: async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        try{
            const reviewData: Review | unknown = dbQuery('SELECT * FROM reviews WHERE id = ?', req.params.id)
            
            res.json(reviewData);
        } catch(err) {
            next(err)
            res.send({message: err});
        }
    },
    newReview: async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        try{
            await dbQuery('INSERT INTO reviews SET ?', req.body)

            res.json ({success: true, message: `Create Review ${req.body}`});
        } catch(err) {
            next(err)
            res.send({message: err});
        }
    },
    uptadeReview: async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        try{
            await dbQuery('UPDATE reviews SET ? WHERE id = ?', [req.body, req.params.id])

            res.json ({success: true, message: `Review ${req.params.id} update succesfully`});
        } catch(err) {
            next(err)
            res.send({message: err});
        }
    },
    deleteReview: async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        try{
            await dbQuery('DELETE FROM reviews WHERE id = ?', req.params.id)

            res.json ({success: true, message: `Review ${req.params.id} delete`});
        } catch(err) {
next(err)
            res.send({message: err});
        }
    },
}

export default reviewsController;
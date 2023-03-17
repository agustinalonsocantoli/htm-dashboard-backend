import express from "express";
import reviewsController from "../controllers/reviews";

const router = express.Router();

router.get('/', reviewsController.getReviews)

router.get('/:id?', reviewsController.getReview)

router.post('/', reviewsController.newReview)

router.put('/:id', reviewsController.uptadeReview)

router.delete('/:id', reviewsController.deleteReview)

export default router;
import express from "express";

const router = express.Router();

router.get('/', (_req, res) => {
    res.status(200).send({
        message: 'Welcome to Hotel Miranda'
    })
})

export default router;
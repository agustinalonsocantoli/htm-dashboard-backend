import express from "express";

const router = express.Router();

router.get('/', (_req, res) => {
    res.send('ALL REVIEWS')
})

router.get('/:id?', (_req, res) => {
    res.send('ONE REVIEW')
})

router.post('/new-review', (_req, res) => {
    res.send('CREATE NEW REVIEW')
})

router.put('/:id', (_req, res) => {
    res.send('UPDATE REVIEW')
})

router.delete('/:id', (_req, res) => {
    res.send('DELETE REVIEW')
})

export default router;
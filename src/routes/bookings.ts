import express from "express";

const router = express.Router();

router.get('/', (_req, res) => {
    res.send('ALL BOOKINGS')
})

router.get('/:id?', (_req, res) => {
    res.send('ONE BOOK')
})

router.post('/new-book', (_req, res) => {
    res.send('CREATE NEW BOOK')
})

router.put('/:id', (_req, res) => {
    res.send('UPDATE BOOK')
})

router.delete('/:id', (_req, res) => {
    res.send('DELETE BOOK')
})

export default router;
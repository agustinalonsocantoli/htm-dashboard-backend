import express from "express";

const router = express.Router();

router.get('/', (_req, res) => {
    res.send('ALL ROOMS')
})

router.get('/:id?', (_req, res) => {
    res.send('ONE ROOM')
})

router.post('/new-room', (_req, res) => {
    res.send('CREATE NEW ROOM')
})

router.put('/:id', (_req, res) => {
    res.send('UPDATE ROOM')
})

router.delete('/:id', (_req, res) => {
    res.send('DELETE ROOM')
})

export default router;
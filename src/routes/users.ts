import express from "express";

const router = express.Router();

router.get('/', (_req, res) => {
    res.send('ALL USERS')
})

router.get('/:id?', (_req, res) => {
    res.send('ONE USER')
})

router.post('/new-user', (_req, res) => {
    res.send('CREATE NEW USER')
})

router.put('/:id', (_req, res) => {
    res.send('UPDATE USER')
})

router.delete('/:id', (_req, res) => {
    res.send('DELETE USER')
})

export default router;
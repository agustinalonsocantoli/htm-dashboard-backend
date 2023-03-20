import express from "express";
import roomsController from "../controllers/rooms";

const router = express.Router();

router.get('/', roomsController.getRooms)

router.get('/:id?', roomsController.getRoom)

router.post('/', roomsController.newRoom)

router.put('/:id', roomsController.uptadeRoom)

router.delete('/:id', roomsController.deleteRoom)

export default router;
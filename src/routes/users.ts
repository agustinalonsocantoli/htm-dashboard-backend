import express from "express";
import usersController from "../controllers/users";

const router = express.Router();

router.get('/', usersController.getUsers)

router.get('/:id?', usersController.getUser)

router.post('/', usersController.newUser)

router.put('/:id', usersController.uptadeUser)

router.delete('/:id', usersController.deleteUser)

export default router;
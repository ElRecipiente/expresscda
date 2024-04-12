import express from "express";
import appointmentController from "../controllers/appointment-controller.js";
const router = express.Router();

router.get('/', appointmentController.findAll);

router.get('/:id', appointmentController.findById);

router.post('/', appointmentController.create)

export default router;
import express from "express";
import appointmentController from "../controllers/appointment-controller.js";
const router = express.Router();

router.get('/', appointmentController.findAll);

router.post('/book', appointmentController.create);

router.post('/test',appointmentController.test)

export default router;
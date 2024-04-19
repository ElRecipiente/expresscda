import express from "express";
import appointmentController from "../controllers/appointment-controller.js";
const appointmentRouter = express.Router();

appointmentRouter.get('/', appointmentController.findAll);

appointmentRouter.post('/book', appointmentController.create);

appointmentRouter.post('/test',appointmentController.test)

export default appointmentRouter;
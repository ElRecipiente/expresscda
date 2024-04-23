import express from "express";
import infoController from "../controllers/info-controller.js";
const infoRouter = express.Router();

infoRouter.get('/', infoController.findAll);

export default infoRouter;
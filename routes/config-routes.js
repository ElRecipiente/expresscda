import express from "express";
import configController from "../controllers/config-controller.js";
const configRouter = express.Router();

configRouter.get('/', configController.findAll);

export default configRouter;
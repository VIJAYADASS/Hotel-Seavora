
import express from "express";
import { getRooms } from "../controllers/roomController.js";
import { getRoomById } from "../controllers/roomController.js";
import { checkAvailability } from "../controllers/roomController.js";


const router = express.Router();

router.get("/", getRooms);
router.get("/:id", getRoomById);
router.get("/check", checkAvailability);


export default router;
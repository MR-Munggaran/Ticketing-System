import express from "express";
import { createEvent, deleteEvent, getEventById, getEvents, updateEvent } from "../controllers/event.controller.js";
import { protectRoute } from "../middlewares/protectRoute.js";
import { upload } from "../utils/upload.js";

const router = express.Router();

router.get("/events", getEvents);
router.get("/events/:id", getEventById);
router.post("/events", protectRoute, upload.single("image"), createEvent);
router.put("/events/:id", protectRoute, upload.single("image"), updateEvent);
router.delete("/events/:id", protectRoute, deleteEvent);

export default router;

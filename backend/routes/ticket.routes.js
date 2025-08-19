import express from "express";
import { protectRoute } from "../middlewares/protectRoute.js";
import { buyTickets, listTickets, myTicket, validateTickets } from "../controllers/ticket.controller.js";

const router = express.Router();

router.get("/tickets", protectRoute, buyTickets);
router.get("/tickets/my", protectRoute, myTicket);
router.get("/events/:id/tickets", protectRoute, listTickets);
router.post("/tickets/validate", protectRoute, validateTickets);

export default router;

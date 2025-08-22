import express from "express";
import { protectRoute } from "../middlewares/protectRoute.js";
import { buyTickets, deleteTicket, listTickets, myTicket, validateTickets } from "../controllers/ticket.controller.js";

const router = express.Router();

router.post("/tickets", protectRoute, buyTickets);
router.get("/tickets/my/:userId", protectRoute, myTicket);
router.get("/events/:id/tickets", protectRoute, listTickets);
router.post("/tickets/validate", protectRoute, validateTickets);
router.delete("/tickets/:id", protectRoute, deleteTicket);

export default router;

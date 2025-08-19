import User from "../models/User.js";
import Ticket from "../models/Ticket.js";
import Event from "../models/Event.js";

import { v4 as uuidv4 } from "uuid";

export const buyTickets = async (req, res) => {
  try {
    const userId = req.user._id; 
    const { eventId, quantity } = req.body;

    // cek user
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // cek event
    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ message: "Event not found" });

    // cek kapasitas
    if (event.capacity < quantity) {
      return res.status(400).json({ message: "Not enough capacity" });
    }

    // kurangi kapasitas event
    event.capacity -= quantity;
    await event.save();

    // buat tiket baru
    const ticket = new Ticket({
      event: event._id,
      user: user._id,
      quantity,
      qrCode: uuidv4(),
      status: "paid",
    });

    await ticket.save();

    res.status(201).json({
      message: "Ticket purchased successfully",
      ticket,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.error("Error in buyTickets controller", error);
  }
};

export const myTicket = async (req, res) => {
  try {
    const userId = req.user._id;
    const tickets = await Ticket.find({ user: userId })
      .populate("event", "title date location")
      .sort({ purchasedAt: -1 });

    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.error("Error in myTicket controller", error);
  }
};

export const listTickets = async (req, res) => {
  try {
    if (!req.user || req.user.role !== "admin") {
      return res.status(403).json({ message: "Unauthorized" });
    }
    const tickets = await Ticket.find()
      .populate("event", "title date")
      .populate("user", "name email");

    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.error("Error in listTickets controller", error);
  }
};

export const validateTickets = async (req, res) => {
  try {
    const { qrCode } = req.body;

    const ticket = await Ticket.findOne({ qrCode });
    if (!ticket) return res.status(404).json({ message: "Ticket not found" });

    if (ticket.status === "validated") {
      return res.status(400).json({ message: "Ticket already used" });
    }

    ticket.status = "validated";
    await ticket.save();

    res.status(200).json({ message: "Ticket validated successfully", ticket });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.error("Error in validateTickets controller", error);
  }
};


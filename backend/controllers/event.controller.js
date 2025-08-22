import fs from "fs";
import path from "path";

import User from "../models/User.js";
import Event from "../models/Event.js";
import { ENV_VARS } from "../config/envVars.js";

export const createEvent = async (req, res) => {
  try {
    const { title, description, location, datetime, price, capacity } = req.body;
    const userId = req.user._id.toString();

    // cek user valid
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // validasi minimal field
    if (!title || !description || !location || !price) {
      return res.status(400).json({ error: "Event must have title, description, location, and price" });
    }

    // cek apakah ada file upload
    let urlImage;
    if (req.file) {
      urlImage = `/uploads/${req.file.filename}`;
    }

    let image = req.file
      ? urlImage
      : ENV_VARS.IMAGE; // default image kalau tidak upload

    // buat event baru
    const newEvent = new Event({
      title,
      description,
      location,
      datetime,
      price,
      capacity,
      image,
      createdBy: user._id,
    });

    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log("Error in createEvent controller", error);
  }
};

export const getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate("createdBy", "name email role");
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log("Error in getEvents controller", error);
  }
};

export const getEventById = async (req,res) => {
    try {
        const event = await Event.findById(req.params.id).populate("createdBy", "name email");
        if(!event) return res.status(404).json({message:"Event not found"});
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
        console.log("Error in getEventById controller", error);
    }
}

export const updateEvent = async (req, res) => {
  try {
    const { title, description, location, datetime, price, capacity } = req.body;
    const event = await Event.findById(req.params.id);

    if (!event) return res.status(404).json({ message: "Event not found" });

    // hanya pembuat atau admin yang bisa update
    if (
      event.createdBy.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    // update field biasa
    event.title = title || event.title;
    event.description = description || event.description;
    event.location = location || event.location;
    event.datetime = datetime || event.datetime;
    event.price = price ?? event.price;
    event.capacity = capacity ?? event.capacity;

    // jika ada file baru
    if (req.file) {
      // hapus gambar lama (kecuali default/eksternal)
      if (event.image && !event.image.startsWith("http")) {
        const oldFilename = path.basename(event.image); // ambil 'filename.jpg'
        const oldPath = path.resolve("utils/upload/images", oldFilename);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }

      // simpan path lengkap ke DB
      event.image = `/uploads/${req.file.filename}`;
    }

    await event.save();
    res.status(200).json(event);
  } catch (error) {
    console.error("Error in updateEvent controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) return res.status(404).json({ message: "Event not found" });

    // hanya pembuat atau admin yang bisa hapus
    if (
      event.createdBy.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    // hapus gambar juga kalau bukan default
    if (event.image && !event.image.startsWith("http")) {
    const filename = path.basename(event.image); 
    const filePath = path.join("utils/upload/images", filename);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }

    await event.deleteOne();
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log("Error in deleteEvent controller", error);
  }
};
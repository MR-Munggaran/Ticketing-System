import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event", // relasi ke Event
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // relasi ke User
      required: true,
    },
    qrCode: {
      type: String,
      unique: true, // tiap tiket punya kode unik
      required: true,
    },
    quantity:{
      type: Number
    },
    status: {
      type: String,
      enum: ["pending", "paid", "validated"], // status tiket
      default: "pending",
    },
    purchasedAt: { 
      type: Date, 
      default: Date.now 
    }
  },
  { timestamps: true }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;

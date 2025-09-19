import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";



import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/database.js";


import authRoutes from './routes/auth.routes.js'
import eventRoutes from './routes/event.routes.js'
import ticketRoutes from './routes/ticket.routes.js'


const app = express();
const PORT = ENV_VARS.PORT;

app.use(cors({
  origin: ["http://localhost:5173", "http://192.168.0.5"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true // kalau mau pakai cookie/session
}));

app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static("utils/upload/images"));

app.get('/', (req,res) => res.send ("Server is Ready"));
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/event', eventRoutes)
app.use('/api/v1/ticket', ticketRoutes)

app.listen(PORT, () => {
  console.log("Server started at http://localhost:" + PORT);
  connectDB();
});
import cors from "cors";
import "dotenv/config";
import express from "express";
import flightRoutes from "./routes/flightRoutes.js";
import authRoutes from "./routes/authRoutes.js"
import ConnectDB from "./config/db.js";
const app = express();
//connecting to db
ConnectDB();
//middlewares
app.use(
  cors({
    origin: ["http://localhost:5173", "https://tripreserve.vercel.app"],
  }),
);
app.use(express.json());

app.use("/api", flightRoutes);
app.use("/api/auth" , authRoutes)
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "TripReserve backend is running",
  });
});

if (process.env.NODE_ENV !== "production") {
  app.listen(process.env.PORT, () => {
    console.log("Server started at", process.env.PORT);
  });
}

export default app;
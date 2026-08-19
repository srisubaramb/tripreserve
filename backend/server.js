import cors from "cors";
import "dotenv/config";
import express from "express";
import flightRoute from "./routes/flightRoutes.js";

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

app.use('/api' , flightRoute)

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "TripReserve backend is running",
  });
});
app.listen(process.env.PORT, () => {
  console.log("Server started at ", process.env.PORT);
});

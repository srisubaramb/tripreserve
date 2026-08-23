import cors from "cors";
import "dotenv/config";
import express from "express";
import routes from "./routes/routes.js"
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

app.use("/api" , routes)


if (process.env.NODE_ENV !== "production") {
  app.listen(process.env.PORT, () => {
    console.log("Server started at", process.env.PORT);
  });
}

export default app;
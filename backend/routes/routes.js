import express from "express"
import aiRoutes from "./aiRoutes.js"
import authRoutes from "./authRoutes.js"
import flightRoutes from "./flightRoutes.js"
const router = express.Router()
router.use('/' , flightRoutes)
router.use('/ai' , aiRoutes)
router.use('/auth' , authRoutes)
router.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "TripReserve backend is running",
  });
});
export default router
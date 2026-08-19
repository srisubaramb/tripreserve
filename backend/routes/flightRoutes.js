import express from "express"
import { getFlights } from "../controllers/flightController.js"
const router = express.Router()
router.get('/flights', getFlights)
export default router
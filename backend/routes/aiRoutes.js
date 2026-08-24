import express from "express"
import { getTravelAnalytics, handleChat } from "../controllers/aiController.js"
const router = express.Router()
router.post('/chat' , handleChat)
router.post('/analytics' , getTravelAnalytics)
export default router
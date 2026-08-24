import { analytics } from "../services/analyticsService.js";
import { chat } from "../services/chatService.js";

export const handleChat = async (req, res) => {
  try {
    const { message, history = [] } = req.body;
    if (!message) {
      return res.status(400).json({
        success: false,
        reply: "Message is required!",
      });
    }
    const respone = await chat(message, history);
    res.status(200).json({
      success: true,
      reply: respone.content,
    });
  } catch (error) {
    console.error("Ai chat bot error ", error);
    res.status(500).json({
      success: false,
      reply: "Error in Ai chat bot",
    });
  }
};

export const getTravelAnalytics = async (req, res) => {
  try {
    const { savedFlights = [], currency = "INR" } = req.body;
	if (!savedFlights || savedFlights.length === 0) {
    return res.status(200).json({
      success: true,
      hasData: false,
      message: "No flight history available to generate analytics.",
    });
  }
  const analyticsReport = await analytics(savedFlights, currency)
  res.status(200).json({
	success:true,
	hasData: true,
	analytics : analyticsReport
  })
  } catch (error) {
    console.error("Analytics Generation Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to generate AI travel analytics.",
    });
  }
};

import {useState} from "react"
export function useAIChat(){
	const [messages, setMessages] = useState([{
    role: "ai",
    content: "Hi! I'm your TripReserve assistant. Where do you want to fly?",
  }]);
  const [isLoading, setIsLoading] = useState(false)
  const sendMessage = async (userMessage) => {
	if(!userMessage.trim()) return 
	const newHistory = [...messages , {"role" : "user" , content : userMessage}]
	setMessages(newHistory)
	setIsLoading(true)
	try{
		const respone = await fetch(`${import.meta.env.VITE_API_URL}/api/ai/chat` , {
			method : "POST",
			headers : {
				"Content-Type" : "application/json"
			},
			body : JSON.stringify({
				message : userMessage,
				history : newHistory
			})
		})
		const data = await respone.json()
		setMessages(pervMessage => [...pervMessage , {role : "ai" , content : data.reply}])
	} catch(error) {
		setMessages([
      ...newHistory,
      { role: "ai", content: "Sorry, I lost my connection!" },
    ]); 
	} finally {
		setIsLoading(false)
	}
  }
  return {messages, isLoading, sendMessage}
}
import {  MessageCircleMore, SendHorizonal, X } from "lucide-react";
import { useState } from "react";
import { useAIChat } from "../src/hooks/useAIChat";
import { Chat } from "./ui/Chat";

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, isLoading, sendMessage } = useAIChat();
  const [userMessage, setUserMessage] = useState("");

  function handleForm(e) {
    e.preventDefault();
    sendMessage(userMessage);
    setUserMessage("");
  }
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end p-1 px-2">
      {isOpen && (
        <div className="bg-white mb-3 w-80 sm:w-96 h-[480px] rounded-2xl shadow-2xl border flex flex-col overflow-hidden px-1 py-2">
          <h2 className="text-center font-semibold text-lg">
            MAx Trip assistant
          </h2>
          <div className="flex-1 overflow-y-auto flex flex-col  gap-y-2 px-2">
            {messages.map((message, index) => (
              <Chat key={index} message={message} />
            ))}
          </div>
          <form
            onSubmit={(e) => handleForm(e)}
            className="flex bg-primary rounded-xl px-2 py-1"
          >
            <input
              type="text"
              name="userMessage"
              id="userMessage"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              className="w-full  placeholder:text-black focus:placeholder-transparent rounded-xl py-1 px-1 pl-2 outline-0 text-lg tracking-wide"
              placeholder="Next trip ?"
            />
            <button type="submit" className="cursor-pointer">
              <SendHorizonal />
            </button>
          </form>
        </div>
      )}{" "}
      <button className="bg-primary p-2 rounded-xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={35} /> : <MessageCircleMore size={32}/>}
      </button>
    </div>
  );
}

import {
  AIMessage,
  HumanMessage,
  SystemMessage,
  ToolMessage,
} from "@langchain/core/messages";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { searchFlightsTool } from "../tools/flightTools.js";

import SYSTEM_PROMPT from "../prompts/systemPrompt.js";

const llm = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  temperature: 0,
});
const tools = [searchFlightsTool];
const toolsByName = { search_flights: searchFlightsTool };
const llmWithTools = llm.bindTools(tools);

export async function chat(message, history) {
  const chatHistory = history.map((msg) => {
    if (msg.role == "user") {
      return new HumanMessage(msg.content);
    } else {
      return new AIMessage(msg.content);
    }
  });
  const messages = [
    new SystemMessage(SYSTEM_PROMPT),
    ...chatHistory,
    new HumanMessage(message),
  ];
  let respone = await llmWithTools.invoke(messages);
  messages.push(respone);
  if (respone.tool_calls && respone.tool_calls.length > 0) {
    for (const toolCall of respone.tool_calls) {
      const selectedTool = toolsByName[toolCall.name];
      if (selectedTool) {
        const toolResult = await selectedTool.invoke(toolCall.args);
        messages.push(
          new ToolMessage({
            content: toolResult,
            tool_call_id: toolCall.id,
          }),
        );
      }
    }
    respone = await llmWithTools.invoke(messages);
  }
  return respone;
}

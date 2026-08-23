import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
export function Chat({message}) {
	const isAi = message.role == "ai"
	const alignClass = message.role == "ai" ? "self-start" : "self-end"
	const senderName = message.role == "ai" ? "MAx" : "You"
	return <div className={`${alignClass} bg-background py-2 px-2 pl-3 rounded-xl`} >
		<h3 className="capitalize font-semibold text-lg">{senderName}</h3>
		{isAi ? (<Markdown remarkPlugins={[remarkGfm]}>
		{message.content}
		</Markdown>):( <p className="text-justify tracking-wide text-base ">{message.content}</p>)}
	</div>
}
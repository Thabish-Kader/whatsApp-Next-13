import { ChatMessage } from "./ChatMessage";
import { SendMessage } from "./SendMessage";
import { unstable_getServerSession } from "next-auth";
import { Providers } from "./providers";

const HomePage = async () => {
	const data = await fetch(`${process.env.VERCEL_URL}/api/getMessages`).then(
		(res) => res.json()
	);
	const messages: Message[] = data.messages;
	// console.log(messages);
	const session = await unstable_getServerSession();
	return (
		<>
			<Providers session={session}>
				{/* Chat messgae */}
				<ChatMessage initialMessages={messages} />
				{/* Send Message  */}
				<SendMessage />
			</Providers>
		</>
	);
};

export default HomePage;

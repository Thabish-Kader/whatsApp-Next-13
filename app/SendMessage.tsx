"use client";
import useSWR, { useSWRConfig } from "swr";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { sendMessage } from "../lib/sendMessage";
import { fetcher } from "../lib/getMessages";
import { useSession } from "next-auth/react";

export const SendMessage = () => {
	const [input, setInput] = useState("");
	const { data: session } = useSession();
	const { data: messages, error } = useSWR("/api/getMessages", fetcher);
	const { mutate } = useSWRConfig();
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!session || !input) return;
		const messgae = input;
		const messageToSend: Message = {
			id: uuidv4(),
			message: messgae,
			created_at: Date.now(),
			username: session?.user?.name!,
			profilePic: session?.user?.image!,
			email: session?.user?.email!,
		};

		sendMessage(messageToSend);
		await mutate("/api/getMessages", sendMessage(messageToSend), {
			optimisticData: [messageToSend, ...messages!],
			rollbackOnError: true,
		});
		setInput("");
	};

	return (
		<form
			className="fixed bottom-0 w-full p-4 bg-white"
			onSubmit={handleSubmit}
		>
			<div className="flex items-center space-x-1">
				<input
					value={input}
					disabled={!session}
					onChange={(e) => setInput(e.target.value)}
					className=" flex-1 rounded border border-gray-300  focus:outline-none 
                focus:ring-2 focus:ring-green-600 focus:border-transparent px-5 py-3
                disabled:opacity-50 disabled:cursor-not-allowed p-2 bg-gray-200"
					type="text"
					placeholder="Send Message ...."
				/>
				<button
					className="button p-3 disabled:opacity-50 disabled:cursor-not-allowed"
					disabled={!input}
				>
					Send
				</button>
			</div>
		</form>
	);
};

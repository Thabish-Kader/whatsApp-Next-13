"use client";
import useSWR from "swr";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { sendMessage } from "../lib/sendMessage";
import { fetcher } from "../lib/getMessages";
export const SendMessage = () => {
	const [input, setInput] = useState("");
	// const {
	// 	data: messages,
	// 	error,
	// 	mutate,
	// } = useSWR("/api/getMessages", fetcher);
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!input) return;
		const messgae = input;
		const messageToSend: Message = {
			id: uuidv4(),
			message: messgae,
			created_at: Date.now(),
			username: "byte",
			profilePic:
				"https://my.kumonglobal.com/wp-content/uploads/2022/03/Learn-from-Rowan-Atkinson_Kumon-Malaysia_530x530_NewsThumbnail.jpg",
			email: "bean@email.com",
		};
		sendMessage(messageToSend);
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

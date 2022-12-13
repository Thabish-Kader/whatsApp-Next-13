"use client";

import { useState } from "react";

export const SendMessage = () => {
	const [input, setInput] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!input) return;

		const messgae = input;
		setInput("");
	};

	return (
		<form
			className="fixed bottom-0 w-full p-4"
			onSubmit={(e) => handleSubmit}
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

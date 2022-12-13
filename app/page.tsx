import React from "react";
import { ChatMessage } from "./ChatMessage";
import { SendMessage } from "./SendMessage";

const HomePage = () => {
	return (
		<div>
			{/* Chat messgae */}
			<ChatMessage />
			{/* Send Message  */}
			<SendMessage />
		</div>
	);
};

export default HomePage;

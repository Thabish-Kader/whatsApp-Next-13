"use client";
import useSWR from "swr";
import { fetcher } from "../lib/getMessages";

export const ChatMessage = () => {
	const { data, error } = useSWR("/api/getMessages", fetcher);
	const messages: Message[] = data.messages;
	console.log(messages);
	return (
		<div>
			{messages?.map((msg) => (
				<p>{msg.message}</p>
			))}
		</div>
	);
};

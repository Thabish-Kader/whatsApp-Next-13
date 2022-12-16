"use client";
import useSWR from "swr";
import { fetcher } from "../lib/getMessages";
import { SingleMessage } from "./SingleMessage";

export const ChatMessage = () => {
	const { data, error } = useSWR("/api/getMessages", fetcher);
	const messages: Message[] = data?.messages;
	// console.log(messages);
	return (
		<div className="space-y-5 max-w-2xl lg:max-w-5xl mx-auto pb-24 mt-5">
			{messages?.map((msg) => (
				<SingleMessage key={msg.id} msg={msg} />
			))}
		</div>
	);
};

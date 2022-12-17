"use client";
import React, { useEffect, useRef } from "react";
import useSWR from "swr";
import { fetcher } from "../lib/getMessages";
import { clientPusher } from "../pusher";
import { SingleMessage } from "./SingleMessage";

type Props = {
	initialMessages: Message[];
};

export const ChatMessage = ({ initialMessages }: Props) => {
	const {
		data: messages,
		error,
		mutate,
	} = useSWR<Message[] | null>("/api/getMessages", fetcher);

	const messagesEndRef = useRef(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	useEffect(() => {
		const channel = clientPusher.subscribe("messages");
		// Dont update cache if you sent msg
		channel.bind("new-message", async (data: Message) => {
			if (messages?.find((message) => message.id === data.id)) return;
			if (!messages) {
				mutate(fetcher);
			} else {
				mutate(fetcher, {
					optimisticData: [data, ...messages],
					rollbackOnError: true,
				});
			}
		});
		return () => {
			channel.unbind_all();
			channel.unsubscribe();
		};
	}, [messages, mutate, clientPusher]);
	return (
		<div className="space-y-5 max-w-2xl lg:max-w-5xl mx-auto pb-24 mt-5">
			{(messages || initialMessages)?.map((msg) => (
				<SingleMessage key={msg.id} msg={msg} />
			))}
			<div ref={messagesEndRef} />
		</div>
	);
};

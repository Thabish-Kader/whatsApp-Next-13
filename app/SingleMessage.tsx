import Image from "next/image";
import React from "react";

type Props = {
	msg: Message;
};

export const SingleMessage = ({ msg }: Props) => {
	const isUser = true;
	return (
		<div className={`flex space-x-2 w-fit ${isUser && "ml-auto"}`}>
			<Image
				src={msg?.profilePic}
				alt={msg?.username}
				height={50}
				width={50}
				className={`object-contain rounded-full space-y-2 flex-shrink-0 mx-2 ${
					isUser && "order-3"
				}`}
			/>

			<div className={`flex flex-col ${isUser && "order-2"}`}>
				<p
					className={`text-xs ${
						isUser ? "text-right text-green-400" : "text-blue-400"
					}`}
				>
					{msg?.username}
				</p>

				<p
					className={`text-lg p-2 rounded-lg text-white ${
						isUser ? "bg-green-400" : "bg-blue-400"
					}`}
				>
					{msg?.message}
				</p>
			</div>
			<p className="text-xs text-gray-400">
				{new Date(msg?.created_at).toLocaleString()}
			</p>
		</div>
	);
};

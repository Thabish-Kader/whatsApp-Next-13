import Image from "next/image";
import React from "react";

type Props = {
	msg: Message;
};

export const SingleMessage = ({ msg }: Props) => {
	return (
		<div className="flex space-x-2 w-fit">
			<div>
				<Image
					src={msg?.profilePic}
					alt={msg?.username}
					height={50}
					width={50}
					className="object-contain rounded-full space-y-2 flex-shrink-0"
				/>
			</div>

			<div className="flex flex-col">
				<p className="text-xs text-blue-400">{msg?.username}</p>
				<p className="text-lg bg-blue-400 p-2 rounded-lg text-white">
					{msg?.message}
				</p>
			</div>
			<p className="text-xs text-gray-400">
				{new Date(msg?.created_at).toLocaleString()}
			</p>
		</div>
	);
};

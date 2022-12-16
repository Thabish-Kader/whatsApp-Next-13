import Image from "next/image";
import React from "react";

type Props = {
	msg: Message;
};

export const SingleMessage = ({ msg }: Props) => {
	return (
		<div className="flex  ">
			<div>
				<Image
					src={msg?.profilePic}
					alt={msg?.username}
					height={50}
					width={50}
					className="object-contain rounded-full space-y-2"
				/>
			</div>

			<div className="flex flex-col">
				<p>{msg?.username}</p>
				<p>{msg?.message}</p>
			</div>
			<p className="mx-2">{new Date(msg?.created_at).toLocaleString()}</p>
		</div>
	);
};

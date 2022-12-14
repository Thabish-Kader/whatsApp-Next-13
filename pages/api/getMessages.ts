// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { redis } from "../../redis";

type Error = {
	errorMessage: string;
};

type Data = {
	messages: Message[];
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data | Error>
) {
	if (req.method !== "GET") {
		res.status(405).send({ errorMessage: "Wrong method type" });
		return;
	}
	const messagesRes = await redis.hvals("messages");
	const messages: Message[] = messagesRes
		.map((msg) => JSON.parse(msg))
		.sort((x, y) => {
			return x.created_at - y.created_at;
		});

	// console.log(messages);
	res.status(200).json({ messages });
}

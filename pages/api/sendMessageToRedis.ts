// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { redis } from "../../redis";

type Error = {
	errorMessage: string;
};

type Data = {
	message: Message;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data | Error>
) {
	if (req.method !== "POST") {
		res.status(405).send({ errorMessage: "Wrong method type" });
		return;
	}
	const { data } = req.body;
	// change the time to time of the server
	const modifiedMessage: Message = {
		...data,
		created_at: Date.now(),
	};
	await redis.hset("messages", data.id, JSON.stringify(modifiedMessage));

	// console.log("Data sent to redis " + modifiedMessage);
	res.status(200).json({ message: modifiedMessage });
}

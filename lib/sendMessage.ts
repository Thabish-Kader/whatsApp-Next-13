export const sendMessage = async (data: Message) => {
	const res = await fetch("/api/sendMessageToRedis", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ data }),
	}).then((res) => res.json());
};

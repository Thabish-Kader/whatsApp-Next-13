export const fetcher = async () => {
	const res = await fetch("/api/getMessages");
	return res.json();
};

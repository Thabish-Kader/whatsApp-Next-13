/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["media.cnn.com"],
	},
};

/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	experimental: {
		appDir: true,
	},
	images: {
		domains: [
			"media.cnn.com",
			"my.kumonglobal.com",
			"platform-lookaside.fbsbx.com",
		],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

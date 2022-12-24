/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['localhost','yarinmatmoni.github.io'],
	},
};

module.exports = nextConfig;

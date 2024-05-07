/** @type {import('next').NextConfig} */
const defaultEnvConfig = {
	NEXT_PUBLIC_OUTPUT_MODE: process.env.NEXT_PUBLIC_OUTPUT_MODE,
	NEXT_GA_MEASUREMENT_ID: process.env.NEXT_GA_MEASUREMENT_ID,
	NEXT_BUILD_ENV: process.env.NEXT_BUILD_ENV
}

const nextConfig = {
	output: process.env.NEXT_PUBLIC_OUTPUT_MODE === 'export' ? 'export' : 'standalone',
	env: defaultEnvConfig,
	trailingSlash: true
}

export default nextConfig

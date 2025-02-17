/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path = '') {
	return `${process.env.NEXT_STRAPI_API_URL || 'https://localhost:1337'}${path}`
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} previewMode Preview mode boolean
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI(path, previewMode, options = {}) {
	// Merge default and user options
	const mergedOptions = {
		headers: {
			'Content-Type': 'application/json'
		},
		...options
	}

	// Build request URL
	const requestUrl = `${getStrapiURL(
		`/api${path}${previewMode ? '&publicationState=preview' : ''}`
	)}`

	// Trigger API call
	const response = await fetch(requestUrl, mergedOptions)

	// Handle response
	if (!response.ok) {
		console.error(response.statusText)
	}

	const data = await response.json()
	return data
}

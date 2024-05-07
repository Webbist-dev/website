import { fetchAPI } from '../../../lib/api'
import Article from './article'
import qs from 'qs'

async function getContent(slug) {
	const query = qs.stringify(
		{
			filters: {
				slug: {
					eq: slug
				}
			},
			populate: {
				tags: {
					populate: true
				},
				seo: {
					populate: true
				},
				content: {
					populate: true
				}
			}
		},
		{
			encodeValuesOnly: true
		}
	)

	const { data } = await fetchAPI(`/articles?${query}`)

	return data[0].attributes
}

export default async function Page({ params }) {
	const { slug } = params
	const content = await getContent(slug)

	return <Article article={content} />
}

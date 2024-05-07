import { fetchAPI } from '../lib/api'
import Homepage from './home-page'
import qs from 'qs'

async function getContent() {
	const articleQuery = qs.stringify(
		{
			populate: {
				tags: {
					populate: true
				}
			}
		},
		{
			encodeValuesOnly: true
		}
	)

	const articles = await fetchAPI(`/articles?${articleQuery}`)

	const informationQuery = qs.stringify(
		{
			fields: {
				0: 'name',
				1: 'experience'
			}
		},
		{
			encodeValuesOnly: true
		}
	)

	const information = await fetchAPI(`/information?${informationQuery}`)

	return {
		information: information.data,
		articles: articles.data
	}
}

export const metaData = {
	title: 'Test title'
}

export default async function Page() {
	const content = await getContent()

	return <Homepage content={content} />
}

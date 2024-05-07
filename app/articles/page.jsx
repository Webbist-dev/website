import qs from 'qs'
import { fetchAPI } from '../../lib/api'
import Articles from './articles'

async function getContent() {
	const query = qs.stringify(
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

	const { data } = await fetchAPI(`/articles?${query}`)

	return data
}

export default async function Page() {
	const content = await getContent()
	return <Articles articles={content} />
}

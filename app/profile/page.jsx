import { fetchAPI } from '../../lib/api'
import Profile from './profile'

async function getContent() {
	const { data } = await fetchAPI(
		'/information?populate[position][populate]=*&fields[1]=profile'
	)

	return data
}

export default async function Page() {
	const content = await getContent()

	return <Profile content={content} />
}

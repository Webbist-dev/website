import { fetchAPI } from '../../lib/api'
import Projects from './projects'

async function getContent() {
	const { data } = await fetchAPI(
		'/projects?populate[tags][populate]=*'
	)

	return data
}

export default async function Page() {
	const content = await getContent()

	return <Projects projects={content} />
}

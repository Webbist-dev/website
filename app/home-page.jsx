'use client'

import Markdown from 'react-markdown'
import Link from 'next/link'

import Navigation from './components/Navigation'
import Tags from './components/Tags'

export default function Homepage({ content }) {
	return (
		<div>
			<div className="heading">
				<h1>{content.information.attributes.name}</h1>
				<h2>Experienced development manager</h2>
			</div>

			<Navigation />

			<div className="main">
				<Markdown>{content.information.attributes.experience}</Markdown>

				<h3>Latest ramblings</h3>

				<div>
					{content.articles.map((article) => (
						<div key={article.id}>
							<h2>
								<Link href={`/articles/${article.attributes.slug}`}>
									{article.attributes.title}
								</Link>
							</h2>
							<p>{article.attributes.excerpt}</p>
							<Tags tags={article.attributes.tags.data} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

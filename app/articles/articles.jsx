'use client'

import Link from 'next/link'
import Tags from '../components/Tags'
import Navigation from '../components/Navigation'
import styles from './articles.module.scss'

export default function Articles({ articles }) {
	return (
		<div>
			<div className="heading">
				<h1>Articles</h1>
			</div>

			<Navigation />
			<div className="main">
				<div className="content">
					<h3>Latest ramblings</h3>

					<div className={styles.articles}>
						{articles.map((article) => (
							<div key={article.id} className={styles.article}>
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
		</div>
	)
}

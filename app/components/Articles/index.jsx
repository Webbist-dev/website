'use client'

import PropTypes from 'prop-types'
import styles from './Articles.module.scss'

import Link from 'next/link'
import Tags from '../Tags'

const Articles = ({ articles }) => {
	return (
		<div>
			{articles.map((article) => (
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
	)
}

Articles.propTypes = {}

export default Articles

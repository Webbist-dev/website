'use client'

import Image from 'next/image'
import Markdown from 'react-markdown'

import Navigation from '../../components/Navigation'
import styles from './article.module.scss'
import Tags from '../../components/Tags'
import PrismLoader from '../../components/Prism'

export default function Article({ article }) {
	const formatDate = (dateString) => {
		const date = new Date(dateString)
		return date.toLocaleDateString('en-GB', {
			month: 'long',
			year: 'numeric',
			timeZone: 'UTC'
		})
	}

	return (
		<div>
			<div className="heading">
				<h1>{article.title}</h1>
				<p>{formatDate(article.updatedAt)}</p>
			</div>

			<Navigation />

			<div className="main">
				<div className="content">
					{article.content.map((content, index) => {
						if (content.__component === 'content.markdown') {
							return <Markdown key={index}>{content.copy}</Markdown>
						}

						if (content.__component === 'content.blockquote') {
							return (
								<div key={index} className={styles.blockquote}>
									<blockquote>{content.quote}</blockquote>{' '}
									<p>{content.caption}</p>
								</div>
							)
						}

						if (content.__component === 'content.codeblock') {
							return (
								<div
									key={index}
									className={`${styles.codeblock} ${content.language}`}
								>
									<pre>
										<code>{content.code}</code>
									</pre>
									<p>{content.caption}</p>
								</div>
							)
						}

						if (content.__component === 'content.image') {
							return (
								<div key={index} className={styles.image}>
									<Image
										src={content.upload.url}
										alt={content.upload.alternativeText}
										width={content.upload.width}
										height={content.upload.height}
									/>
									<p>{content.caption}</p>
								</div>
							)
						}

						return null
					})}
				</div>
				<div className="sidebar">
					<Tags tags={article.tags.data} />
				</div>
			</div>

			<PrismLoader />
		</div>
	)
}

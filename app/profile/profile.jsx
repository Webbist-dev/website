'use client'

import Link from 'next/link'
import Tags from '../components/Tags'
import Navigation from '../components/Navigation'
import styles from './profile.module.scss'

export default function Profile({ content }) {
	return (
		<div>
			<div className="heading">
				<h1>About me</h1>
			</div>

			<Navigation />
			<div className="main">
				<div className="content">
					<h3>Profile</h3>
					<p>{content.attributes.profile}</p>

					<div className={styles.timeline}>
						<h3>Career timeline</h3>
						{content.attributes.position.map((position) => (
							<div key={position.id} className={styles.position}>
								<h4>
									{position.date} : {position.title}{' '}
									<Link href={`https://twitter.com/${position.handle}`}>
										@{position.handle}
									</Link>
								</h4>

								<p>{position.description}</p>

								<Tags tags={position.tags.data} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

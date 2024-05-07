'use client'

import Tags from '../components/Tags'
import Navigation from '../components/Navigation'
import styles from './project.module.scss'

export default function Profile({ projects }) {
	return (
		<div>
			<div className="heading">
				<h1>Projects</h1>
			</div>

			<Navigation />
			<div className="main">
				<div className="content">
					<div className={styles.row}>
						<div className={styles.cell}>
							<h4>Year</h4>
						</div>
						<div className={styles.cell}>
							<h4>Project</h4>
						</div>
						<div className={styles.cell}>
							<h4>Made at</h4>
						</div>
						<div className={styles.cell}>
							<h4>Built with</h4>
						</div>
						<div className={styles.cell}>
							<h4>Link</h4>
						</div>
					</div>
					{projects.map((project) => (
						<div key={project.id} className={styles.row}>
							<div className={styles.cell}>{project.attributes.year}</div>
							<div className={styles.cell}>{project.attributes.name}</div>
							<div className={styles.cell}>{project.attributes.employer}</div>
							<div className={styles.cell}>
								<Tags tags={project.attributes.tags.data} />
							</div>
							<div className={styles.cell}>{project.attributes.link}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

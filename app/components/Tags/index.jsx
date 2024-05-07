'use client'

import PropTypes from 'prop-types'
import styles from './Tags.module.scss'

const Tag = ({ tags }) => {
	return (
		<div className={styles.tags}>
			{tags.map((tag) => (
				<span key={tag.id} className={styles.tag}>
					{tag.attributes.label}
				</span>
			))}
		</div>
	)
}

Tag.propTypes = {
	label: PropTypes.string
}

export default Tag

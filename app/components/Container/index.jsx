'use client'

import PropTypes from 'prop-types'
import styles from './Container.module.scss'

const Container = ({ children, className, size, verticalPadding }) => {
	return (
		<div
			className={`${className || ''} ${styles[size] || ''} ${
				styles.container
			} ${styles[`vertical-padding-${verticalPadding || 'both'}`]}`}
		>
			{children}
		</div>
	)
}

Container.propTypes = {
	children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
	className: PropTypes.string,
	size: PropTypes.string,
	verticalPadding: PropTypes.string
}

export default Container

'use client'

import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from './Navigation.module.scss'
import { usePathname } from 'next/navigation'

const Navigation = () => {
	const pathname = usePathname()
	return (
		<nav className={styles.navigation}>
			<ul className={styles.ul}>
				<li>
					<Link
						href={'/articles'}
						className={`${
							pathname.startsWith('/articles') ? styles.active : ''
						} ${styles.link}`}
					>
						Articles
					</Link>
				</li>
				<li>
					<Link
						href={'/profile'}
						className={`${pathname == '/profile/' ? styles.active : ''} ${
							styles.link
						}`}
					>
						Profile
					</Link>
				</li>
				<li>
					<Link
						href={'/projects'}
						className={`${pathname == '/projects/' ? styles.active : ''} ${
							styles.link
						}`}
					>
						Projects
					</Link>
				</li>
			</ul>
		</nav>
	)
}

Navigation.propTypes = {
	label: PropTypes.string
}

export default Navigation

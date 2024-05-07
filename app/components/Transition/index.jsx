'use client'

import { motion } from 'framer-motion'

const Transition = ({ children }) => {
	const wrapperVariants = {
		initial: {
			opacity: 0
		},
		in: {
			opacity: 1,
			transition: {
				duration: 0.33
			}
		},
		out: {
			opacity: 0,
			transition: {
				duration: 0.33
			}
		}
	}

	return (
		<>
			<motion.div
				variants={wrapperVariants}
				initial="initial"
				animate="in"
				exit="out"
			>
				{children}
			</motion.div>
		</>
	)
}

export default Transition

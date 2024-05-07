import { DM_Mono } from 'next/font/google'
import Container from './components/Container'
import Footer from './components/Footer'
import Transition from './components/Transition'
import '../styles/global.css'

const DMMonoFont = DM_Mono({
	weight: '500',
	subsets: ['latin'],
	variable: '--font-dm-mono'
})

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={DMMonoFont.variable}>
				<div className="layout">
					<Container size="wide" verticalPadding="none">
						<Transition>
							{children}
							<Footer />
						</Transition>
					</Container>
				</div>
			</body>
		</html>
	)
}

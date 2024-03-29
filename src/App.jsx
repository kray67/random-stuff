import { useLocation, useOutlet } from 'react-router-dom'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './App.scss'
import Header from '@/components/common/header/Header.jsx'
import FuzzyOverlay from '@/components/fuzzyOverlay/FuzzyOverlay.jsx'

const App = () => {

	const location = useLocation()

	const [fuzzy, setFuzzy] = useState(false)

	const AnimatedOutlet = () => {
		const o = useOutlet();
		const [outlet] = useState(o);

		return <>{outlet}</>;
	}

	const headerAnimation = {
		initial: {
			translateY: -150,
			opacity: 0,
		},
		slide: {
			translateY: 0,
			opacity: 1,
			transition: {
				duration: 0.3
			}
		}
	}

	return (
		<div id="App">
			{
				fuzzy &&
				<FuzzyOverlay />
			}
			
			<motion.div
			className="header-animation-wrapper"
			variants={headerAnimation}
			initial="initial"
			animate="slide">
				<Header fuzzyState={fuzzy} setFuzzyState={() => setFuzzy(!fuzzy)} />
			</motion.div>

			<AnimatePresence initial={false} mode="wait">
				<motion.div key={location.pathname} className="content"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}>
					<AnimatedOutlet />
				</motion.div>
			</AnimatePresence>
			<div id="overlay-wrapper"></div>
		</div>
	)
}

export default App

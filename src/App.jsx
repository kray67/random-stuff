import { useLocation, useOutlet } from 'react-router-dom'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './App.scss'
import Header from '@/components/common/header/Header.jsx'
import FuzzyOverlay from '@/components/fuzzyOverlay/FuzzyOverlay.jsx'
import Toggle from '@/components/common/toggle/Toggle'

const App = () => {

	const location = useLocation()

	const [fuzzy, setFuzzy] = useState(false)

	const AnimatedOutlet = () => {
		const o = useOutlet();
		const [outlet] = useState(o);

		return <>{outlet}</>;
	}

	return (
		<div id="App">
			{
				location.pathname === '/' &&
				<AnimatePresence mode="wait">
					<motion.div
					className="toggle-fuzzy"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}>
						<Toggle
						text="FUZZY MODE"
						clicked={() => setFuzzy(!fuzzy)} />
					</motion.div>
				</AnimatePresence>
			}
			{
				fuzzy &&
				<FuzzyOverlay />
			}
			<Header />
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

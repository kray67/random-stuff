import { useLocation, useOutlet } from "react-router-dom"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import '@/styles/App.scss'
import Header from '@/components/common/Header.jsx'

const App = () => {

	const location = useLocation()

	const AnimatedOutlet = () => {
		const o = useOutlet();
		const [outlet] = useState(o);

		return <>{outlet}</>;
	}

	return (
		<div id="App">
			<Header />
			<AnimatePresence initial={false} mode="wait">
				<motion.div key={location.pathname} className="content"
				initial={{ translateX: "-100%", opacity: 0 }}
				animate={{ translateX: 0, opacity: 1 }}
				exit={{ translateX: "-100%", opacity: 0 }}
				transition={{ duration: 0.5 }}>
					<AnimatedOutlet />
				</motion.div>
			</AnimatePresence>
			<div id="overlay-wrapper"></div>
		</div>
	)
}

export default App

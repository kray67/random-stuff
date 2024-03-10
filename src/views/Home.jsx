import { router } from '@/routes/router.jsx'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import '@/styles/views/Home.scss'
import Button from '@/components/common/Button'

const Home = () => {

	const routes = router.routes[0].children

	const homeRoutes = routes.filter((route) => !route.hideInHome)

    const displayRoutes = homeRoutes.map((route, index) =>
		<motion.div
		key={index}
		initial={{ translateX: '-100vh', opacity: 0 }}
		animate={{ translateX: 0, opacity: 1 }}
		transition={{ duration: 1 * ((index + 1) / 2.5) }}>
			<Link className="home-link nostyle" key={index} to={route.path}>
				<Button text={route.linkText} comingSoon={!route.isAvailable}/>
			</Link>
		</motion.div>
	)

	return (
		<div
		id="Home"
		key="home"
		className="view-wrapper">
			<AnimatePresence>
				{ displayRoutes }
			</AnimatePresence>
		</div>
	)
}

export default Home
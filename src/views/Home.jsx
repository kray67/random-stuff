import { router } from '@/routes/router.jsx'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import '@/styles/views/Home.scss'
import Button from '@/components/common/Button'

const staggerControl = {
	initial: {
		transition: {
			staggerChildren: 0.2
		}
	},
	animate: {
		transition: {
			staggerChildren: 0.2
		}
	}
}

const linkAnimation = {
	initial: {
		x: -200,
		opacity: 0
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.5
		}
	}
}

const Home = () => {

	const routes = router.routes[0].children

	const homeRoutes = routes.filter((route) => !route.hideInHome)

    const displayRoutes = homeRoutes.map((route, index) =>
		<motion.div
		key={index}
		variants={linkAnimation}>
			<Link className="home-link nostyle" key={index} to={route.path}>
				<Button text={route.linkText} comingSoon={!route.isAvailable}/>
			</Link>
		</motion.div>
	)

	return (
		<AnimatePresence>
			<motion.div
			id="Home"
			key="home"
			className="view-wrapper"
			variants={staggerControl}
			initial="initial"
			animate="animate">
				{/* <AnimatePresence>
					{ displayRoutes }
				</AnimatePresence> */}
				{ displayRoutes }
			</motion.div>
		</AnimatePresence>
	)
}

export default Home
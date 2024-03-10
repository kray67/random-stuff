import { router } from '@/routes/router.jsx'
import { Link } from "react-router-dom"
import '@/styles/views/Home.scss'
import Button from '@/components/common/Button'

const Home = () => {

	const routes = router.routes[0].children

	const homeRoutes = routes.filter((route) => !route.hideInHome)

    const displayRoutes = homeRoutes.map((route, index) =>
		<Link className="home-link nostyle" key={index} to={route.path}>
			<Button text={route.linkText} comingSoon={!route.isAvailable}/>
		</Link>
	)

	return (
		<div
		id="Home"
		key="home"
		className="view-wrapper">
			{ displayRoutes }
		</div>
	)
}

export default Home
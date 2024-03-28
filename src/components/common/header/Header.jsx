import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { router } from '@/routes/router.jsx'
import './Header.scss'
import SlideMenu from '@/components/common/slideMenu/SlideMenu'

const Header = () => {

    const pathname = useLocation().pathname
    const [displayName, setDisplayName] = useState('')

    useEffect(() => {
        if (pathname === '/') {
            setDisplayName('Random Stuff')
        } else {
            const routes = router.routes[0].children
            setDisplayName(routes.filter((route) => route.path === pathname)[0].displayName)
        }
    }, [pathname])
    
    /* Routes for Menu Links */
    const routes = router.routes[0].children
    const menuItems = []
    routes.map((route) => {
        if (route.path !== pathname) {
            menuItems.push({
                link: route.path,
                text: route.linkText
            })
        }
    }) 

    return (
        <div className="header-wrapper">
            <Link className={`nostyle home-btn ${pathname === '/' ? 'disabled' : ''}`} to="/">RS</Link>
            <AnimatePresence mode="wait">
                <motion.div
                key={displayName}
                className="header-title"
                initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: -100, opacity: 0.2 }}
				transition={{ duration: 0.3 }}>
                    {displayName}
                </motion.div>
            </AnimatePresence>
            <div className="spacer-div"></div>
            <SlideMenu menuItems={menuItems} />
        </div>
    )
}

export default Header
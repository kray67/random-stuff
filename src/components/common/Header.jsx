import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { router } from '@/routes/router.jsx'
import '@/styles/components/common/Header.scss'
import BackIcon from '@/assets/icons/back.svg?react'

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
    

    return (
        <div className="header-wrapper">
            {
                pathname !== '/'
                    &&  <Link className="nostyle home-btn" to="/">
                            <BackIcon />
                        </Link>
            }
            <AnimatePresence initial={false} mode="wait">
                <motion.div
                key={displayName}
                className="header-title"
                initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}>
                    {displayName}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default Header
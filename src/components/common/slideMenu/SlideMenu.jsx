import { router } from '@/routes/router.jsx'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useAnimate } from 'framer-motion'
import { useState, useEffect } from 'react'
import './SlideMenu.scss'

const SlideMenu = () => {

    const [active, setActive] = useState(false)
    const [scope, animate] = useAnimate()

    useEffect (() => {
        const openAnimation = async () => {
            // Animate expand width and bg color
            await animate(scope.current, { width: '25vw', backgroundColor: 'var(--clr-tertiary)' }, { duration: 0.15 } )
            // Animate expand height
            animate(scope.current, { height: '70vh' }, { duration: 0.15, delay: 0.15 } )
            // TOTAL OPEN ANIMATION TIME: 0.45s
        }

        const closeAnimation = async () => {
            // Animate close height
            await animate(scope.current, { height: 50 }, { duration: 0.15, delay: 0.5 } )
            // Animate close width and bg color
            animate(scope.current, { width: 50, backgroundColor: 'var(--clr-secondary)' }, { duration: 0.15, delay: 0.15 } )
            // TOTAL CLOSE ANIMATION TIME: 0.45s
        }

        if (active) {
            openAnimation()
        } else {
            closeAnimation()
        }
    }, [active, scope, animate])

    const linksWrapperVar = {
        animateIn: {
            height: '100%',
            transition: {
                duration: 0,
                delay: 0.5,
            }
        },
        animateOut: {
            height: 0,
            transition: {
                duration: 0,
                delay: 0.5,
            }
        }
    }

    const linkVar = {
        initial: {
            opacity: 0,
            rotateX: 90,
        },
        animate: (i) => ({
            opacity: 1,
            rotateX: 0,
            transition: {
                delay: 0.5 + (0.05 * i),
                duration: 0.3
            }
        }),
        exit: {
            opacity: 0,
            transition: {
                duration: 0.2
            }
        }
    }

    /* Routes for Links */
    const routes = router.routes[0].children
    const pathname = useLocation().pathname
    let len = 0
    const displayRoutes = routes.map((route, index) => {
        if (route.path !== pathname) {
            len = len + 1
            return (
                    <div
                    className="perspective-wrapper"
                    key={index}>
                        <motion.div
                        className="menu-item"
                        variants={linkVar}
                        custom={(index, len)}
                        initial="initial"
                        animate="animate"
                        exit="exit">
                            <Link
                            className="home-link nostyle"
                            to={route.path}
                            onClick={() => setActive(false)}>
                                <div>{ route.linkText }</div>
                            </Link>
                        </motion.div>
                    </div>
            )
        }
    })

    return (
        <motion.div
        className="menu-wrapper"
        ref={scope}>
            <Burger clicked={() => setActive(!active)} isActive={active}/>
            <motion.div
            className="routes-container"
            variants={linksWrapperVar}
			initial="animateOut"
			animate={active ? "animateIn" : "animateOut"}>
                <AnimatePresence>
                    { active && displayRoutes }
                </AnimatePresence>
            </motion.div>
        </motion.div>
    )
}

const Burger = ({clicked, isActive}) => {

    const onClickHandler = (ev) => {
        clicked(ev)
    }

    const topVar = {
        initial: {
            rotate: 0,
            y: 0,
            backgroundColor: 'var(--clr-text)',
        },
        animateIn: {
            rotate: '-135deg',
            y: 8,
            backgroundColor: 'var(--clr-secondary)',
            transition: {
                backgroundColor: { delay: 0.25 },
                duration: 0.5,
                delay: 0.25,
                ease: [0.34, 1.56, 0.64, 1]
            }
        },
        animateOut: {
            rotate: 0,
            y: 0,
            backgroundColor: 'var(--clr-text)',
            transition: {
                backgroundColor: { delay: 0.25 },
                duration: 0.25,
                delay: 0.25
            }
        }
    }

    const midVar = {
        initial: {
            x: 0,
            backgroundColor: 'var(--clr-text)',
        },
        animateIn: {
            x: -50,
            backgroundColor: 'var(--clr-secondary)',
            transition: {
                backgroundColor: { delay: 0.25 },
                duration: 0.5,
                ease: [0.34, 1.56, 0.64, 1]
            }
        },
        animateOut: {
            x: 0,
            backgroundColor: 'var(--clr-text)',
            transition: {
                backgroundColor: { delay: 0.25 },
                duration: 0.25,
                delay: 0.5,
                ease: [0.34, 1.56, 0.64, 1]
            }
        }
    }

    const bottomVar = {
        initial: {
            rotate: 0,
            y: 0,
            backgroundColor: 'var(--clr-text)',
        },
        animateIn: {
            rotate: '135deg',
            y: -8,
            backgroundColor: 'var(--clr-secondary)',
            transition: {
                backgroundColor: { delay: 0.25 },
                duration: 0.5,
                delay: 0.25,
                ease: [0.34, 1.56, 0.64, 1]
            }
        },
        animateOut: {
            rotate: 0,
            y: 0,
            backgroundColor: 'var(--clr-text)',
            transition: {
                backgroundColor: { delay: 0.25 },
                duration: 0.25,
                delay: 0.25
            }
        }
    }

    return (
        <div className="burger-btn" onClick={() => onClickHandler()}>
            <motion.div
            className="burger-line top"
            variants={topVar}
            initial="initital"
            animate={isActive ? "animateIn" : "animateOut"}/>
            
            <motion.div
            className="burger-line middle"
            variants={midVar}
            initial="initital"
            animate={isActive ? "animateIn" : "animateOut"}/>
            
            <motion.div
            className="burger-line bottom"
            variants={bottomVar}
            initial="initital"
            animate={isActive ? "animateIn" : "animateOut"}/>
        </div>
    )

}

export default SlideMenu
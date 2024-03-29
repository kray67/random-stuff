import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useAnimate } from 'framer-motion'
import OutsideClickHandler from 'react-outside-click-handler'
import { useState, useEffect } from 'react'
import './SlideMenu.scss'
import Burger from '@/components/common/slideMenu/Burger'
import Toggle from '@/components/common/toggle/Toggle'
import { openAnimation, closeAnimation, wrapperVar, itemVar, toggleVar } from '@/assets/scripts/sliderHelpers'

const SlideMenu = ({ menuItems, fuzzyState, setFuzzyState }) => {

    const [active, setActive] = useState(false)
    const [scope, animate] = useAnimate()

    const totalItems = menuItems.length

    useEffect (() => {
        if (active) {
            openAnimation(scope.current, animate)
        } else {
            closeAnimation(scope.current, animate, totalItems)
        }
    }, [active, scope, animate, totalItems])
    
    const displayRoutes = menuItems.map(({link, text}, index) => {
        const reverseIndex = totalItems - index
        const variant = itemVar(index, reverseIndex)
        return (
            <div
            className="perspective-wrapper"
            key={index}>
                <motion.div
                className="menu-item"
                variants={variant}
                initial="initial"
                animate="animate"
                exit="exit">
                    <Link
                    className="home-link nostyle"
                    to={link}
                    onClick={() => setActive(false)}>
                        <div>{ text }</div>
                    </Link>
                </motion.div>
            </div>
        )
    })

    return (
        <OutsideClickHandler
        onOutsideClick={ () => setActive(false) }>
            <motion.div
            className="menu-wrapper"
            ref={scope}>
                <Burger clicked={() => setActive(!active)} isActive={active}/>
                <motion.div
                className="routes-container"
                variants={wrapperVar}
                initial="animateOut"
                animate={active ? "animateIn" : "animateOut"}>
                    <AnimatePresence>
                        { active && displayRoutes }
                    </AnimatePresence>

                    <AnimatePresence>
                        {
                            active &&
                            <motion.div
                            className="toggle-animation-wrapper"
                            variants={toggleVar}
                            initial="initial"
                            animate="animate"
                            exit="exit">
                                <Toggle
                                text="Fuzzy Mode"
                                isToggled={fuzzyState}
                                clicked={setFuzzyState} />
                            </motion.div>
                        }
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </OutsideClickHandler>
    )
}

export default SlideMenu
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import './BoxLoader.scss'
import { useBoxLoader } from '@/hooks/useBoxLoader'
 
// const NUMBER_OF_BOXES = 10
const ANIMATION_CYCLE_INTERVAL = 1500
const ANIMATION_VERTICAL_DURATION = 500
const ANIMATION_HORIZONTAL_DURATION = 1000

const BoxLoader = ({size, totalBoxes}) => {

    const NUMBER_OF_BOXES = totalBoxes

    const boxesWrapperRef = useRef(null);
    const { initiateAnimationCycle } = useBoxLoader({
        boxesWrapperRef,
        numberOfBoxes: NUMBER_OF_BOXES,
        verticalDuration: ANIMATION_VERTICAL_DURATION,
        horizontalDuration: ANIMATION_HORIZONTAL_DURATION
    })

    useEffect(() => {
        boxesWrapperRef.current.style.setProperty('--total-boxes', NUMBER_OF_BOXES)
        initiateAnimationCycle()
        const interval = setInterval(() => {
            initiateAnimationCycle()
        }, ANIMATION_CYCLE_INTERVAL)

        return () => clearInterval(interval)
    }, [initiateAnimationCycle, NUMBER_OF_BOXES])
    
    return (
        <motion.div
        id="boxWrapper"
        ref={boxesWrapperRef}
        className={`box-loader-wrapper ${size}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}>
            {Array(NUMBER_OF_BOXES).fill().map((_, i) => (
                <div key={i} className={`box box-${i}`}></div>
            ))}
        </motion.div>
    )
}

BoxLoader.propTypes = {
    size: PropTypes.string,
    totalBoxes: PropTypes.number
}

BoxLoader.defaultProps = {
    size: 'medium',
    totalBoxes: 5
}

export default BoxLoader
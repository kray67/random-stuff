import { motion } from 'framer-motion'

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
            backgroundColor: 'var(--clr-text)',
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
            backgroundColor: 'var(--clr-text)',
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
            backgroundColor: 'var(--clr-text)',
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

export default Burger
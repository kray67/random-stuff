import { AnimatePresence, motion } from 'framer-motion'
import './AnimatedWordWrapper.scss'
import AnimatedLetter from '@/components/animatedWord/AnimatedLetter'

const wordAnimation = {
	rest: {
		transition: {
			staggerChildren: 0.1,
		},
	},
	hover: {
		transition: {
			staggerChildren: 0.1,
		},
	},
}

const AnimatedWord = ({ word, animation, animationStart }) => {
    return (
        <AnimatePresence>
        <motion.div
            variants={wordAnimation}
            initial="rest"
            animate={animationStart ? "hover" : "rest"}
            className="animated-word">
            {
            word
            .split("")
            .map((char, idx) =>
                char === " " ? (
                    <div key={idx}>&nbsp;</div>
                ) : (
                    <AnimatedLetter key={idx} character={char} animation={animation} />
                )
            )}
        </motion.div>
        </AnimatePresence>
    )
}

export default AnimatedWord
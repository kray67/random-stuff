import { motion } from 'framer-motion'
import './AnimatedWordWrapper.scss'

const AnimatedLetter = ({ character, animation }) => {

    return (
        <motion.div
        className="animated-letter"
        variants={animation}>
            {character}
        </motion.div>
    )
}

export default AnimatedLetter
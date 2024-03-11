import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import '@/styles/components/common/AnimatedWordWrapper.scss'

const AnimatedLetter = ({ character, animation }) => {

    return (
        <motion.div
        className="animated-letter"
        variants={animation}>
            {character}
        </motion.div>
    )
}

AnimatedLetter.propTypes = {
    character: PropTypes.string,
    animation: PropTypes.object
}

export default AnimatedLetter
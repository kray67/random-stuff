import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'
import '@/styles/components/common/Overlay.scss'

const Overlay = ({ children, onClick }) => {

    return (
        createPortal(
            <motion.div
            className="overlay"
            onClick={ onClick }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}>
                { children }
            </motion.div>,
            document.getElementById('overlay-wrapper')
        )
    )
}

Overlay.propTypes = {
    children: PropTypes.object,
    onClick: PropTypes.func
}

export default Overlay
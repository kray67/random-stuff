import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'
import './Overlay.scss'

const Overlay = ({ children, onClick }) => {

    return (
        createPortal(
            <motion.div
            className="overlay"
            onClick={ onClick }
            initial={{ opacity: 0, backdropFilter: 'none' }}
            animate={{ opacity: 1, backdropFilter: 'blur(5px)' }}
            exit={{ opacity: 0, backdropFilter: 'none' }}
            transition={{ duration: 0.3 }}>
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
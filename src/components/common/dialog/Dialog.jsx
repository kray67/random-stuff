import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import './Dialog.scss'
import Overlay from '@/components/common/overlay/Overlay'
import Button from '@/components/common/button/Button'

const dropIn = {
    initial: {
        y: "-100vh",
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.3,
            duration: 0.25,
            type: "spring",
            damping: 25,
            stiffness: 500
        }
    },
    exit: {
        y: "100vh",
        opacity: 0
    }
}

const Dialog = (props) => {

    const cancelHandler = () => {
        props.cancel(true)
    }

    const confirmHandler = () => {
        props.confirm(true)
    }

    return (
        <Overlay onClick={cancelHandler}>
            <motion.div
            className="dialog-overlay"
            onClick={(e) => e.stopPropagation()}
            variants={dropIn}
            initial="initial"
            animate="animate"
            exit="exit">
                <div className="dialog-container">
                    <div className="title">{props.params.title}</div>
                    <div className="message">{props.params.message}</div>
                    <div className="buttons">
                        <Button text={props.params.confirmBtnText} clicked={confirmHandler} />
                        <Button text={props.params.cancelBtnText} clicked={cancelHandler} />
                    </div>
                </div>
            </motion.div>
        </Overlay>
    )
}

Dialog.propTypes = {
    params: PropTypes.object,
    confirm: PropTypes.func,
    cancel: PropTypes.func
}

export default Dialog
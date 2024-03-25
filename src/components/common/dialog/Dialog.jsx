import { motion } from 'framer-motion'
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

const Dialog = ({params, confirm, cancel}) => {

    const cancelHandler = () => {
        cancel(true)
    }

    const confirmHandler = () => {
        confirm(true)
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
                    <div className="title">{params.title}</div>
                    <div className="message">{params.message}</div>
                    <div className="buttons">
                        <Button text={params.confirmBtnText} clicked={confirmHandler} />
                        <Button text={params.cancelBtnText} clicked={cancelHandler} />
                    </div>
                </div>
            </motion.div>
        </Overlay>
    )
}

export default Dialog
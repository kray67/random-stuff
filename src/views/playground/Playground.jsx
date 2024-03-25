import './Playground.scss'
import Spinner2 from '@/components/common/spinner-2/Spinner2'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

const Playground = () => {

    const [showSpinner, setShowSpinner] = useState(false)

    return (
        <div id="Playground">
            <AnimatePresence>
                <button onClick={() => setShowSpinner((prev) => !prev)}> Click Me! </button>
                { showSpinner ? <Spinner2 key="spinner2" /> : null }
            </AnimatePresence>
        </div>
    )
}

export default Playground
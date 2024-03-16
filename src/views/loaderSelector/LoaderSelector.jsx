import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import './LoaderSelector.scss'
import Button from '@/components/common/button/Button'
import BoxLoader from '@/components/boxLoader/BoxLoader'
import PlusIcon from '@/assets/icons/plus.svg?react'
import MinusIcon from '@/assets/icons/minus.svg?react'

const LoaderSelector = () => {
    const [size, setSize] = useState('medium')
    const [totalBoxes, setTotalBoxes] = useState(5)

    return (
        <div
        id="BoxLoader"
        key="boxLoader"
        className="view-wrapper">
            <div className="commands">
                <div className="buttons-wrapper">
                    <Button
                    text="BIG"
                    isDisabled={size === 'big'}
                    clicked={() => setSize('big')}/>
                    <Button
                    text="MEDIUM"
                    isDisabled={size === 'medium'}
                    clicked={() => setSize('medium')}/>
                    <Button
                    text="SMALL"
                    isDisabled={size === 'small'}
                    clicked={() => setSize('small')}/>
                </div>
                <div className="controls-wrapper">
                    <div className={`control ${totalBoxes < 3 ? 'disabled' : ''}`} onClick={() => setTotalBoxes(totalBoxes - 1)}>
                        <MinusIcon />
                    </div>
                    <div className="total">{totalBoxes} boxes</div>
                    <div className={`control ${totalBoxes > 10 ? 'disabled' : ''}`} onClick={() => setTotalBoxes(totalBoxes + 1)}>
                        <PlusIcon />
                    </div>
                </div>
            </div>

            <AnimatePresence mode='wait'>
                <BoxLoader key={`${size}-${totalBoxes}`} size={size} totalBoxes={totalBoxes} />
            </AnimatePresence>
        </div>
    )
}

export default LoaderSelector
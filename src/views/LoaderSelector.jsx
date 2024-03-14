import { useState } from 'react'
import '@/styles/views/LoaderSelector.scss'
import Button from '@/components/common/Button'
import BoxLoader from '@/components/common/BoxLoader'

const LoaderSelector = () => {
    const [size, setSize] = useState('medium')

    return (
        <div
        id="BoxLoader"
        key="boxLoader"
        className="view-wrapper">
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
            
            { size === 'big' && <BoxLoader size={size} /> }
            { size === 'medium' && <BoxLoader size={size} /> }
            { size === 'small' && <BoxLoader size={size} /> }

            {/* <BoxLoader size={size} /> */}
        </div>
    )
}

export default LoaderSelector
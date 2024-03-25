import { useState } from 'react'
import './Toggle.scss'

const Toggle = ({text, isDisabled, clicked}) => {

    const [toggled, setToggled] = useState()

    const onClickHandler = (ev) => {
        if(!clicked) return
        setToggled((pv) => !pv)
        clicked(ev)
    }

    return (
        <div className={`toggle-wrapper ${isDisabled ? 'disabled' : ''}`}>

            <div
            className={`toggle-outer ${toggled ? 'toggled' : ''}`}
            onClick={() => onClickHandler()}>
                <div className="toggle-inner"></div>
            </div>

            <div className="label">
                { text }
            </div>

        </div>
    )
}

export default Toggle
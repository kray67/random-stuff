import { useState } from 'react'
import './Toggle.scss'

const Toggle = ({ text, isDisabled, isToggled, clicked}) => {

    const [toggled, setToggled] = useState(isToggled)

    const onClickHandler = (ev) => {
        if(!clicked) return
        setToggled((pv) => !pv)
        clicked(ev)
    }

    return (
        <div className={`toggle-wrapper ${isDisabled ? 'disabled' : ''}`}>

            <div className="label">
                { text }
            </div>

            <div
            className={`toggle-outer ${toggled ? 'toggled' : ''}`}
            onClick={() => onClickHandler()}>
                <div className="toggle-inner"></div>
            </div>

        </div>
    )
}

export default Toggle
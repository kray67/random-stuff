import { useState } from 'react'
import PropTypes from 'prop-types'
import './Toggle.scss'

const Toggle = (props) => {

    const [toggled, setToggled] = useState()

    const onClickHandler = (ev) => {
        if(!props.clicked) return
        setToggled((pv) => !pv)
        props.clicked(ev)
    }

    return (
        <div className="toggle-wrapper">

            <div
            className={`toggle-outer ${toggled ? 'toggled' : ''}`}
            onClick={() => onClickHandler()}>
                <div className="toggle-inner"></div>
            </div>

            <div className="label">
                { props.text }
            </div>

        </div>
    )
}

Toggle.propTypes = {
    text: PropTypes.string,
    isDisabled: PropTypes.bool,
    clicked: PropTypes.func
}

export default Toggle
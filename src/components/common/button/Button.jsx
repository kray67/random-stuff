import PropTypes from 'prop-types'
import './Button.scss'

const Button = (props) => {

    const onClickHandler = (ev) => {
        if(!props.clicked) return
        props.clicked(ev)
    }

    return (
        <div
        className={`btn${props.isBig ? ' big' : ''}${props.isSecondary ? ' secondary' : ''}${props.isDisabled ? ' disabled' : ''}`}
        onClick={() => onClickHandler()}>
            {props.text}

            { props.comingSoon && <div className="coming-soon">Coming Soon!</div> }
        </div>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    isBig: PropTypes.bool,
    isSecondary: PropTypes.bool,
    isDisabled: PropTypes.bool,
    clicked: PropTypes.func,
    comingSoon: PropTypes.bool
}

export default Button
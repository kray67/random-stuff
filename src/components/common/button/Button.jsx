import './Button.scss'

const Button = ({text, isBig, isSecondary, isDisabled, clicked, comingSoon}) => {

    const onClickHandler = (ev) => {
        if(!clicked) return
        clicked(ev)
    }

    return (
        <div
        className={`btn${isBig ? ' big' : ''}${isSecondary ? ' secondary' : ''}${isDisabled ? ' disabled' : ''}`}
        onClick={() => onClickHandler()}>
            {text}

            { comingSoon && <div className="coming-soon">Coming Soon!</div> }
        </div>
    )
}

export default Button
import PropTypes from 'prop-types'
import './Card.scss'

const Card = (props) => {

    const clickHandler = () => {
        props.clicked(props.data.id)
    }

    return <>
        <div className={`card-wrapper${props.data.isFlipped ? ' flipped' : ''}${props.data.isSolved ? ' solved' : ''}${props.isDisabled ? ' disabled' : ''}`} onClick={() => clickHandler()}>
            <div className="card-inner">
                <div className="card-front">❔</div>
                <div className="card-back" style={{backgroundColor: props.data.group}}>{props.data.emoji}</div>
            </div>
        </div>
    </>
}

Card.propTypes = {
    data: PropTypes.object,
    clicked: PropTypes.func,
    isDisabled: PropTypes.bool
}

export default Card

import './Card.scss'

const Card = ({data, clicked, isDisabled}) => {

    const clickHandler = () => {
        clicked(data.id)
    }

    return <>
        <div className={`card-wrapper${data.isFlipped ? ' flipped' : ''}${data.isSolved ? ' solved' : ''}${isDisabled ? ' disabled' : ''}`} onClick={() => clickHandler()}>
            <div className="card-inner">
                <div className="card-front">❔</div>
                <div className="card-back" style={{backgroundColor: data.group}}>{data.emoji}</div>
            </div>
        </div>
    </>
}

export default Card

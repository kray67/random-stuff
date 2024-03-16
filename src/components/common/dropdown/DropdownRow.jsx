import PropTypes from 'prop-types'
import './Dropdown.scss'

const DropdownRow = (props) => {

    const clickHandler = () => {
        props.clicked(props.option.id)
    }

    return (
        <>
        
            <div className="option" onClick={ () => clickHandler() }>
                { props.option.text.charAt(0).toUpperCase() + props.option.text.slice(1) }
            </div>

        </>
    )
}

DropdownRow.propTypes = {
    option: PropTypes.object,
    selected: PropTypes.bool,
    clicked: PropTypes.func
}

export default DropdownRow
import './Dropdown.scss'

const DropdownRow = ({option, clicked, selected}) => {

    const clickHandler = () => {
        clicked(option.id)
    }

    return (
        <>
        
            <div className={`option ${selected ? 'selected' : ''}`} onClick={ () => clickHandler() }>
                { option.text.charAt(0).toUpperCase() + option.text.slice(1) }
            </div>

        </>
    )
}

export default DropdownRow
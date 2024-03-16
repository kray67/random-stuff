import { useState, useRef } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import PropTypes from 'prop-types'
import './Dropdown.scss'
import DropdownRow from '@/components/common/dropdown/DropdownRow'
import ArrowDownIcon from '@/assets/icons/arrow-down.svg?react'

const Dropdown = (props) => {

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
    const dropdownRef = useRef(null)

    const toggleDropdownIsOpen = () => {
        setDropdownIsOpen(!dropdownIsOpen)
    }

    const rowClicked = (id) => {
        props.updateSelected(id)
        setDropdownIsOpen(false)
    }

    const selectedId = props.selectedOption ? props.selectedOption.toString() : null

    const selectedHeaderText = props.selectedOption
                ? props.options.filter((option) => option.id === props.selectedOption)[0].text
                : props.placeholder

    const dropdownRows = props.options.map((option) => {
        return <DropdownRow
        key={ option.id }
        option={ option }
        selected={ selectedId === option.id }
        clicked={ (id) => rowClicked(id) } />
    })

    return (
        <OutsideClickHandler
        onOutsideClick={ () => setDropdownIsOpen(false) }>
            <div className={ `dropdown-wrapper ${dropdownIsOpen ? 'open' : 'closed'}` } ref={dropdownRef}>

                {/* DROPDOWN LABEL */}
                {
                    props.label &&
                        <div className="label">{ props.label }</div>
                }

                {/* DROPDOWN CONTENT */}
                <div className="dropdown-content">

                    {/* DROPDOWN HEADER */}
                    <div className="dropdown-header" onClick={ () => toggleDropdownIsOpen() }>

                        {/* DROPDOWN HEADER TEXT / PLACEHOLDER */}
                        <div className="dropdown-header-text">
                            { selectedHeaderText.charAt(0).toUpperCase() + selectedHeaderText.slice(1) }
                        </div>

                        {/* TOGGLE DROPDOWN ARROW ICON */}
                        {
                            (props.options && props.options.length > 1) &&
                                <div className="dropdown-toggle-icon-wrapper">
                                    <ArrowDownIcon />
                                </div>
                        }
                    </div>

                    {/* DROPDOWN BODY */}
                    <div className="dropdown-body scroll">
                        { dropdownRows }
                    </div>
                </div>

            </div>
        </OutsideClickHandler>
    )
}

Dropdown.propTypes = {
    options: PropTypes.array,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    selectedOption: PropTypes.number,
    updateSelected: PropTypes.func
}

export default Dropdown

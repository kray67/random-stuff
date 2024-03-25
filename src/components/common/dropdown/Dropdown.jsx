import { useState, useRef } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import './Dropdown.scss'
import DropdownRow from '@/components/common/dropdown/DropdownRow'
import ArrowDownIcon from '@/assets/icons/arrow-down.svg?react'

const Dropdown = ({
    options,
    label,
    placeholder,
    selectedOption,
    updateSelected
}) => {

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
    const dropdownRef = useRef(null)

    const toggleDropdownIsOpen = () => {
        setDropdownIsOpen(!dropdownIsOpen)
    }

    const rowClicked = (id) => {
        updateSelected(id)
        setDropdownIsOpen(false)
    }

    const selectedId = selectedOption ? selectedOption.toString() : null

    const selectedHeaderText = selectedOption
                ? options.filter((option) => option.id === selectedOption)[0].text
                : placeholder

    const dropdownRows = options.map((option) => {
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
                    label &&
                        <div className="label">{ label }</div>
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
                            (options && options.length > 1) &&
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

export default Dropdown

import PropTypes from 'prop-types'
import '@/styles/components/common/BoxLoader2.scss'

const BoxLoader2 = (props) => {

    return (
        <div
        id="boxWrapper"
        className={`box-loader-wrapper ${props.size}`}>
            <div className="box box-0"></div>
            <div className="box box-1"></div>
            <div className="box box-2"></div>
            <div className="box box-3"></div>
            <div className="box box-4"></div>
            <div className="box box-5"></div>
            <div className="box box-6"></div>
        </div>
    )
}

BoxLoader2.propTypes = {
    size: PropTypes.string
}

export default BoxLoader2
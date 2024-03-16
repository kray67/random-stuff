import { useRouteError } from "react-router-dom"
import './ErrorPage.scss'

const ErrorPage = () => {
    const error = useRouteError()
    console.error(error)

	return (
		<>
			<div id="ErrorPage" className="view-wrapper">
                <h1 className="error-code">{error.status}</h1>
                <div className="error-text">
                    <h1 className="oops">Oops!</h1>
                    <h1 className="error-message">{error.statusText || error.message}</h1>
                </div>
			</div>
		</>
	)
}

export default ErrorPage

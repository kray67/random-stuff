import { createBrowserRouter, Navigate } from "react-router-dom"
import App from '@/App.jsx'
import Home from '@/views/Home'
import Flip from '@/views/Flip'
import Wordle from '@/views/Wordle'
import Quote from '@/views/Quote'
import LoaderSelector from '@/views/LoaderSelector'
import ErrorPage from '@/views/ErrorPage'

export const router = createBrowserRouter([
	{	
		element: <App />,
		path: "/",
		children: [
			{
				index: true,
				element: <Home />,
				errorElement: <ErrorPage />,
				displayName: 'Random Stuff',
				hideInHome: true
			},
			{
				path: "/flip",
				element: <Flip />,
				errorElement: <ErrorPage />,
				displayName: "Tile Flip",
				linkText: "Play Tile Flip",
				isAvailable: true
			},
			{
				path: "/wordle",
				element: <Wordle />,
				errorElement: <ErrorPage />,
				displayName: "Wordle",
				linkText: "Play Wordle",
				isAvailable: false
			},
			{
				path: "/quote",
				element: <Quote />,
				errorElement: <ErrorPage />,
				displayName: "Quotes",
				linkText: "Quote Generator",
				isAvailable: true
			},
			{
				path: "/loader",
				element: <LoaderSelector />,
				errorElement: <ErrorPage />,
				displayName: "Boxes Loader",
				linkText: "Cool Boxes Loader",
				isAvailable: true
			}
		]
	},
	{
		path: "*",
		element: <Navigate to="/" />,
		hideInHome: true
	}
])

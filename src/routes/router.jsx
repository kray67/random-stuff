import { createBrowserRouter, Navigate } from "react-router-dom"
import App from '@/App.jsx'
import Home from '@/views/home/Home'
import Flip from '@/views/flip/Flip'
import Wordle from '@/views/wordle/Wordle'
import Quote from '@/views/quote/Quote'
import LoaderSelector from '@/views/loaderSelector/LoaderSelector'
import ErrorPage from '@/views/errorPage/ErrorPage'

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

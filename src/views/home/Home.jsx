import './Home.scss'
import { useRef, useEffect } from 'react'
import { animateBlob } from '@/assets/scripts/blob.js'
import { motion, AnimatePresence } from 'framer-motion'
import BlobSVG from '@/assets/blob/blob.svg?react'

const Home = () => {

	const blobContainerRef = useRef(null)

	useEffect(() => {
		if (blobContainerRef) {
			const blobRef = blobContainerRef.current.children[0]
			animateBlob(blobRef)
		}
	}, [blobContainerRef])

	return (
		<div
		id="Home"
		className="view-wrapper">
			<AnimatePresence>
				<motion.div
				ref={blobContainerRef}
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5, delay: 1 }}>
					<BlobSVG />
				</motion.div>
			</AnimatePresence>
		</div>
	)
}

export default Home
import { useState } from 'react'
import { motion } from 'framer-motion'
import './AnimatedWordWrapper.scss'
import AnimatedWord from '@/components/animatedWord/AnimatedWord'

const letterAnimationUp = {
	rest: {
		y: 0,
	},
	hover: {
		y: "-200px",
		transition: {
			repeat: Infinity,
			repeatType: "loop",
			repeatDelay: 7,
			duration: 0.5,
			
		},
	},
}

const letterAnimationDown = {
	rest: {
		y: "200px",
	},
	hover: {
		y: 0,
		transition: {
			repeat: Infinity,
			repeatType: "loop",
			repeatDelay: 7,
			duration: 0.5,
			
		},
	},
}

const AnimatedWordWrapper = ({ word, animationDelay, textStyle }) => {

	const [animationStart, setAnimationStart] = useState(false)

	setTimeout(() => {
		setAnimationStart(true)
	}, animationDelay)

	return (
		<motion.div
		className={ `animated-word-wrapper ${textStyle}` }>
			<AnimatedWord word={word} animation={letterAnimationDown} animationStart={animationStart} />
			<div className="word-absolute-top">
				<AnimatedWord word={word} animation={letterAnimationUp} animationStart={animationStart} />
			</div>
		</motion.div>
	)
}

export default AnimatedWordWrapper
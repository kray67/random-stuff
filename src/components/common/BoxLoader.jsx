import { useState } from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import '@/styles/components/common/BoxLoader.scss'

const BoxLoader = (props) => {
    const [box1, setBox1] = useState(1)
    const [box2, setBox2] = useState(5)
    const [box1Active, setBox1Active] = useState(false)
    const [box2Active, setBox2Active] = useState(false)

    const boxes = document.getElementsByClassName('box')

    const getRandomNumbers = () => {
        let num1 = Math.floor(Math.floor(Math.random() * boxes.length)) // Generates a random number between 0 and 4
        let num2 = Math.floor(Math.floor(Math.random() * boxes.length)) // Generates another random number between 0 and 4

        // Ensure num2 is different from num1 and previous numbers
        while (num2 === num1) {
            num2 = Math.floor(Math.random() * 7)
        }

        setBox1(num1)
        setBox2(num2)
    }
    
    const startMoving = () => {
        if(box1Active || box2Active) return
        getRandomNumbers()
        if(!box1 || box1 === null || !box2 || box2 === null) return
        animateBox1()
        animateBox2()
    }

    const animateBox1 = () => {
        setBox1Active(true)
        const thisBox = boxes[box1]
        const otherBox = boxes[box2]
        const otherBoxStyles = getComputedStyle(otherBox)
        const otherBoxLeft = otherBoxStyles.getPropertyValue('left')

        thisBox.classList.add('active')
        thisBox.classList.add('moveUp')
        setTimeout(() => {
            thisBox.style.left = otherBoxLeft
        }, 500)
        setTimeout(() => {
            thisBox.classList.remove('moveUp')
            thisBox.classList.remove('active')
        }, 1000)
        setBox1Active(false)
    }

    const animateBox2 = () => {
        setBox2Active(true)
        const thisBox = boxes[box2]
        const otherBox = boxes[box1]
        const otherBoxStyles = getComputedStyle(otherBox)
        const otherBoxLeft = otherBoxStyles.getPropertyValue('left')

        thisBox.classList.add('active')
        thisBox.classList.add('moveDown')
        setTimeout(() => {
            thisBox.style.left = otherBoxLeft
        }, 500)
        setTimeout(() => {
            thisBox.classList.remove('moveDown')
            thisBox.classList.remove('active')
        }, 1000)
        setBox2Active(false)
    }

    setTimeout(() => {
        startMoving()
    }, 1500)

    return (
        <motion.div
        id="boxWrapper"
        className={`box-loader-wrapper ${props.size}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}>
            <div className="box box-0"></div>
            <div className="box box-1"></div>
            <div className="box box-2"></div>
            <div className="box box-3"></div>
            <div className="box box-4"></div>
            <div className="box box-5"></div>
            <div className="box box-6"></div>
        </motion.div>
    )
}

BoxLoader.propTypes = {
    size: PropTypes.string
}

export default BoxLoader
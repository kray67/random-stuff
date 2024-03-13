import { useState } from 'react'
import '@/styles/views/BoxLoader.scss'

const BoxLoader = () => {
    const [box1, setBox1] = useState(1)
    const [box2, setBox2] = useState(4)
    
    const boxes = document.getElementsByClassName('box')

    const getRandomNumbers = () => {
        let num1 = Math.floor(Math.floor(Math.random() * boxes.length)) // Generates a random number between 0 and 4
        let num2 = Math.floor(Math.floor(Math.random() * boxes.length)) // Generates another random number between 0 and 4

        // Ensure num1 is different from previous numbers
        while (num1 === box1 || num1 === box2) {
            num1 = Math.floor(Math.random() * 5)
        }

        // Ensure num2 is different from num1 and previous numbers
        while (num2 === num1 || num2 === box1 || num2 === box2) {
            num2 = Math.floor(Math.random() * 5)
        }

        setBox1(num1)
        setBox2(num2)
    }
    
    const startMoving = () => {
        getRandomNumbers()

        animateBox1()
        animateBox2()
    }

    const animateBox1 = () => {
        const thisBox = boxes[box1]
        const otherBox = boxes[box2]
        const otherBoxStyles = getComputedStyle(otherBox)
        const otherBoxLeft = otherBoxStyles.getPropertyValue('left')

        thisBox.classList.add('active')
        thisBox.classList.add('moveUp')
        setTimeout(() => {
            thisBox.style.left = otherBoxLeft
        }, 750)
        setTimeout(() => {
            thisBox.classList.remove('moveUp')
            thisBox.classList.remove('active')
        }, 1500)
    }

    const animateBox2 = () => {
        const thisBox = boxes[box2]
        const otherBox = boxes[box1]
        const otherBoxStyles = getComputedStyle(otherBox)
        const otherBoxLeft = otherBoxStyles.getPropertyValue('left')

        thisBox.classList.add('active')
        thisBox.classList.add('moveDown')
        setTimeout(() => {
            thisBox.style.left = otherBoxLeft
        }, 750)
        setTimeout(() => {
            thisBox.classList.remove('moveDown')
            thisBox.classList.remove('active')
        }, 1500)
    }

    setTimeout(() => {
        startMoving()
    }, 3000)

    return (
        <div
        id="BoxLoader"
        key="boxLoader"
        className="view-wrapper">
            <div id="boxWrapper" className="box-loader-wrapper">
                <div className="box box-0"></div>
                <div className="box box-1"></div>
                <div className="box box-2"></div>
                <div className="box box-3"></div>
                <div className="box box-4"></div>
            </div>
        </div>
    )
}

export default BoxLoader
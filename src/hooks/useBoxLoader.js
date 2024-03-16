import { useState, useEffect } from 'react';
import { generateRandomNumbers } from '@/assets/scripts/numberGenerator';

const MOVE_UP = 'moveUp';
const MOVE_DOWN = 'moveDown';
const ACTIVE = 'active';

export const useBoxLoader = ({
    boxesWrapperRef, 
    numberOfBoxes,
    verticalDuration,
    horizontalDuration
}) => {
    const [boxes, setBoxes] = useState([])

    useEffect(() => {
        setBoxes(boxesWrapperRef.current.querySelectorAll('.box'))
    }, [boxesWrapperRef])

    const initiateAnimationCycle = () => {
        if(!boxes.length) return;
        const { num1, num2 } = generateRandomNumbers(numberOfBoxes)
        animateBoxes(boxes[num1], boxes[num2])
    }

    const animateBoxes = (primaryBox, secondaryBox) => {
        const primaryBoxLeft = primaryBox.offsetLeft
        const secondaryBoxLeft = secondaryBox.offsetLeft

        primaryBox.classList.add(ACTIVE)
        primaryBox.classList.add(MOVE_UP)
        secondaryBox.classList.add(ACTIVE)
        secondaryBox.classList.add(MOVE_DOWN)
        setTimeout(() => {
            primaryBox.style.left = `${secondaryBoxLeft}px`
            secondaryBox.style.left = `${primaryBoxLeft}px`
        }, verticalDuration);
        setTimeout(() => {
            primaryBox.classList.remove(MOVE_UP)
            primaryBox.classList.remove(ACTIVE)
            secondaryBox.classList.remove(MOVE_DOWN)
            secondaryBox.classList.remove(ACTIVE)
        }, horizontalDuration)
    }

    return {
        initiateAnimationCycle
    }
}
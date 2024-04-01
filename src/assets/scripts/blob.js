import "path-data-polyfill"

export const animateBlob = (svg) => {
    const path = svg.querySelector('path')
    const INITIAL_SEGMENTS = path.getPathData()

    const startAnimationCycle = (segments) => {
        const newSegments = updateSegmentValues(segments)
        setNewSegments(newSegments)
    }

    const setNewSegments = (newSegments) => {
        path.setPathData(newSegments)

        setTimeout(() => {
            startAnimationCycle(INITIAL_SEGMENTS)
        }, 500);
    }

    const updateSegmentValues = (segments) => {
        // return segments.map(segment => {
        //     if (segment.type === 'C') {
        //         const updatedValues = segment.values.map(value => getRandomNumber(value))
        //         return { ...segment, values: updatedValues }
        //     }
        //     return segment
        // })
        return segments.map(segment => {
            const updatedValues = segment.values.map(value => getRandomNumber(value))
            return { ...segment, values: updatedValues }
        })
    }

    const getRandomNumber = (initialValue) => {
        let min = Math.max(1, initialValue - 15)
        let max = Math.min(99, initialValue + 15)

        if (initialValue < 0) {
            min = Math.max(-99, initialValue - 15)
            max = Math.min(-1, initialValue + 15)
        }

        return Math.floor(Math.random() * (max - min + 1)) + min;

        // const min = Math.max(-100, initialValue - 15)
        // const max = Math.min(100, initialValue + 15)
        // return Math.floor(Math.random() * (max - min + 1)) + min
    }

    startAnimationCycle(INITIAL_SEGMENTS)
}
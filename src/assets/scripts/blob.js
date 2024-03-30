import "path-data-polyfill"

export const animateBlob = (svg) => {
    const path = svg.querySelector('path')
    const INITIAL_SEGMENTS = path.getPathData()
    console.log(INITIAL_SEGMENTS)

    const startAnimationCycle = (segments) => {
        const newSegments = updateSegmentValues(segments)
        setNewSegments(newSegments)
    }

    const setNewSegments = (newSegments) => {
        path.setPathData(newSegments)

        setTimeout(() => {
            startAnimationCycle(INITIAL_SEGMENTS)
        }, 1000);
    }

    const updateSegmentValues = (segments) => {
        return segments.map(segment => {
            if (segment.type === 'C') {
                const updatedValues = segment.values.map(value => getRandomNumber(value))
                return { ...segment, values: updatedValues }
            }
            return segment
        })
    }

    const getRandomNumber = (initialValue) => {
        const min = Math.max(-100, initialValue - 15)
        const max = Math.min(100, initialValue + 15)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    startAnimationCycle(INITIAL_SEGMENTS)
}
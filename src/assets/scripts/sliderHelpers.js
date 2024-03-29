export const openAnimation = async (scope, animate) => {
    // Animate bg color
    await animate(scope, { backgroundColor: 'var(--clr-tertiary)' }, { duration: 0.15 } )
    // Animate expand width
    await animate(scope, { width: '25vw' }, { duration: 0.15 } )
    // Animate expand height
    animate(scope, { height: '70vh' }, { duration: 0.15 } )
}

export const closeAnimation = async (scope, animate, len) => {
    // Animate close height
    await animate(scope, { height: 50 }, { duration: 0.15, delay: (0.05 * len) + 0.1 } )
    // Animate close width
    await animate(scope, { width: 50 }, { duration: 0.15 } )
    // Animate bg color
    animate(scope, { backgroundColor: 'hsl(0, 0, 0%, 0)' }, { duration: 0.15 } )
}

export const wrapperVar = {
    animateIn: {
        height: '85%',
        transition: {
            duration: 0,
            delay: 0.5,
        }
    },
    animateOut: {
        height: 0,
        transition: {
            duration: 0,
            delay: 0.5,
        }
    }
}

export const itemVar = (i, rev) => {
    return {
        initial: {
            opacity: 0,
            rotateX: 90,
        },
        animate: {
            opacity: 1,
            rotateX: 0,
            transition: {
                delay: 0.5 + (0.05 * i),
                duration: 0.2
            }
        },
        exit: {
            opacity: 0,
            rotateX: 90,
            transition: {
                delay: 0.05 * rev,
                duration: 0.2
            }
        }
    }
}

export const toggleVar = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.25,
            delay: 0.75,
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.25,
            delay: 0,
        }
    }
}
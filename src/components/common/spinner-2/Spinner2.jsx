import { useEffect } from 'react'
import { useAnimate, usePresence } from 'framer-motion'
import './Spinner2.scss'

const Spinner = () => {
    const [isPresent, safeToRemove] = usePresence()
    const [scope, animate] = useAnimate()

    useEffect(() => {

        const colorChangeAnimation = async () => {
            await animate(scope.current, { backgroundColor: '#007934' }, { duration: 2 } )
            await animate(scope.current, { backgroundColor: '#faea36' }, { duration: 2 } )
            await animate(scope.current, { backgroundColor: '#fa366d' }, { duration: 2 } )
            await animate(scope.current, { backgroundColor: '#36bbfa' }, { duration: 2 } )
            await colorChangeAnimation()
        }

        const borderRadiusAnimation = async () => {
            await animate(scope.current, { borderRadius: '100% 100% 100% 100%' }, { duration: 0.75 } )
            await animate(scope.current, { borderRadius: '70% 100% 90% 80%' }, { duration: 0.75 } )
            await animate(scope.current, { borderRadius: '100% 70% 70% 100%' }, { duration: 0.75 } )
            await animate(scope.current, { borderRadius: '30% 100% 100% 70%' }, { duration: 0.75 } )
            await animate(scope.current, { borderRadius: '100% 60% 70% 30%' }, { duration: 0.75 } )
            await animate(scope.current, { borderRadius: '70% 100% 90% 100%' }, { duration: 0.75 } )
            // await animate(scope.current, { borderRadius: '100% 100% 100% 100%' }, { duration: 0.75 } )
            await borderRadiusAnimation()
        }
        
        if (isPresent) {
            const enterAnimation = async () => {
                await animate(scope.current, { opacity: 1 }, { duration: 0.15 })
                animate(scope.current, { rotate: 360 }, { repeat: Infinity, duration: 5, ease: 'linear' })
                colorChangeAnimation()
                borderRadiusAnimation()
            }
            enterAnimation()
        } else {
            const exitAnimation = async () => {
                await animate(scope.current, { opacity: 0 })
                safeToRemove()
            }
            exitAnimation()
        }
    }, [isPresent])

    return (
        <div ref={scope} id="Spinner2"></div>
    )
}

export default Spinner
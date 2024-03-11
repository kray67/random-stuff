import '@/styles/views/Wordle.scss'
import AnimatedWordWrapper from '@/components/common/animatedWord/AnimatedWordWrapper'

const Wordle = () => {

    return (
        <div
        id="Wordle"
        key="wordle"
        className="view-wrapper">

            <div className="under-development">
                <AnimatedWordWrapper textStyle="title" word="WORDLE" animationDelay={ 500 } />
                <AnimatedWordWrapper textStyle="message" word="COMING SOON" animationDelay={ 750 } />
            </div>

        </div>
    )
}

export default Wordle
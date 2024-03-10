import { useState, useRef } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import '@/styles/views/Flip.scss'
import Button from '@/components/common/Button'
import CardGrid from '@/components/flip/CardGrid.jsx'

const Flip = () => {

	/* ***** Use States ***** */
	const [gameState, setGameState] = useState(true)
	const [finalTime, setFinalTime] = useState('00:00')
	const [finalFlips, setFinalFlips] = useState(0)
	// const [finalScore, setFinalScore] = useState(100)
	const [userWon, setUserWon] = useState(false)

	/* ***** Data & Refs ***** */
	const userFlips = 25
	const goRef = useRef(null)
	const overRef = useRef(null)
	const nodeRef = gameState ? goRef : overRef

	/* ***** Logic ***** */
	const handleGameOver = (time, flips, gameWon) => {
		const flipsUsed = userFlips - flips

		setFinalTime(`${time.minutes}:${time.seconds}`)
		setFinalFlips(flipsUsed)
		setUserWon(gameWon)
		setGameStateHandler(false)
	}

	const setGameStateHandler = (targetGameState) => {
		setGameState(targetGameState)
	}

	return (
        <div
        id="Flip"
        key="flip"
        className="view-wrapper">
            <SwitchTransition mode="out-in">
                <CSSTransition
                key={gameState}
                classNames="fade"
                nodeRef={nodeRef}
                addEndListener={(done) => {
                    nodeRef.current.addEventListener("transitionend", done, false);
                }}>
                    <div
                    ref={nodeRef}
                    className="container">
        
                        {
                            gameState
                            
                            /* GAME IS RUNNING */
                            ? <CardGrid flips={userFlips} gameOver={handleGameOver}/> 
                            
                            /* GAME OVER STATE */
                            : <div className="game-over-wrapper">

                                { userWon
                                    ? <h1 className="message win">🥳 WINNER 🥳</h1>
                                    : <h1 className="message lost">💩 LOSER 💩</h1>
                                }

                                <div className="results-wrapper">
                                    <div className="result-group time">
                                        <span>Final Time</span>
                                        <span className="result">{finalTime}</span>
                                    </div>

                                    <div className="result-group flips">
                                        <span>Total Flips</span>
                                        <span className="result">{finalFlips}</span>
                                    </div>
                                </div>
                                
                                <Button text="Flip Again" isBig={true} clicked={() => setGameStateHandler(true)} />
                            </div>
                        }
                    </div>
                </CSSTransition>
            </SwitchTransition>
        </div>
	)
}

export default Flip

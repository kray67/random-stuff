import { useState, useEffect } from 'react'
import { cardsArray, shuffleCards } from '@/assets/scripts/flipHelpers.js'
import { AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'
import './CardGrid.scss'
import Card from '@/components/flip/Card'
import Dialog from '@/components/common/dialog/Dialog'

const CardGrid = (props) => {
    
    /* ***** Use States ***** */
    // Cards Related
    const [cardsList, setCardsList] = useState(shuffleCards(cardsArray))
    const [activeFlipped, setActiveFlipped] = useState([])
    const [lastFlipped, setLastFlipped] = useState({})
    const [allSolved, setAllSolved] = useState(false)

    // Game State & Time Related
    const [gameIsRunning, setGameIsRunning] = useState(false)
    const [startGameTime, setStartGameTime] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0)
    const [seconds, setSeconds] = useState('00')
    const [minutes, setMinutes] = useState('00')

    // Flips Related
    const [userFlips, setUserFlips] = useState(props.flips)
    const [noMoreFlips, setNoMoreFlips] = useState(false)
    
    // Modal Related
    const [showModal, setShowModal] = useState(false)

    /* ***** Logic ***** */
    const flipCard = (id) => {
        let flippedCard = null

        // If more than 1 card is flipped, prevent flip
        if (activeFlipped.length > 1) return

        const updatedCards = cardsList.map(card => {
            // Flip the card with matching ID
            if (card.id === id) {
                flippedCard = card
                return {
                    ...card,
                    isFlipped: true
                }
            } else {
                return card
            }
        })

        // Save flipped card as last flipped
        setLastFlipped(flippedCard)
        // Add flipped card to array of flipped cards
        setActiveFlipped((f) => [...f, flippedCard])
        // Update cards array
        setCardsList(updatedCards)
	}

    const checkCardsMatch = (group) => {
        // If less than 2 cards are flipped, end check
        if (activeFlipped.length < 2) return

        // Number of flipped cards that match the last flipped card's group
        const matchingCardsLen = activeFlipped.filter(card => card.group === group).length

        if (matchingCardsLen === 2) {
            // Solve Card Pair and Unflip All
            const solvedCards = cardsList.map(card => {
                return card.isFlipped
                    ? { ...card, isSolved: true }
                    : card
            })

            // Update cards array
            setCardsList(solvedCards)
            // Empty flipped cards array
            setActiveFlipped([])
        } else {
            // Unflip all flipped cards
            unflipCards()
        }

        // Subtract an attempt
        setUserFlips(userFlips - 1)
    }

    const unflipCards = () => {
        const unflippedCards = cardsList.map(card => {
            return (card.isFlipped && !card.isSolved)
                ? { ...card, isFlipped: false }
                : card
        })

        // Update cards array
        setCardsList(unflippedCards)
        // Empty flipped cards array
        setActiveFlipped([])
    }

    const showDialog = () => {
        pauseTimer()
        setShowModal(true)
    }

    const hideDialog = () => {
        setShowModal(false)
        setStartGameTime(true)
    }

    const startGame = () => {
        setGameIsRunning(true)
        setStartGameTime(true)
    }

    const pauseTimer = () => {
        setStartGameTime(false)
    }

    const endGameHandler = () => {
        setShowModal(false)
        setGameIsRunning(false)
        // Reset the timer value to 0
        setElapsedTime(0)
        setTimeout(() => { props.gameOver({minutes, seconds}, userFlips, false) }, 1000)
    }

    /* ***** Use Effects ***** */

    // When a card is flipped check if it matches another card
    useEffect(() => {
        setTimeout(() => {
            checkCardsMatch(lastFlipped.group)
        }, 750);
    }, [lastFlipped])

    // When userFlips reaches 0
    // Display game over screen
    useEffect(() => {
        if (userFlips === 0) {
            setNoMoreFlips(true)
            const allCardsFlipped = cardsList.map(card => { return {...card, isFlipped: true} })
            setCardsList(allCardsFlipped)
            setTimeout(() => { props.gameOver({minutes, seconds}, userFlips, false) }, 3000)
        }
    }, [userFlips])

    // When there are no more cards to flip
    // Display game over screen
    useEffect(() => {
        const totalSolved = cardsList.filter(card => card.isSolved).length
        if (totalSolved === cardsList.length) {
            setAllSolved(true)
            setTimeout(() => { props.gameOver({minutes, seconds}, userFlips, true) }, 1000)
        }
    }, [cardsList])

    // Game timer
    useEffect(() => {
        setTimeout(() => {
            if(!gameIsRunning) return
            if(!startGameTime) return
            if (allSolved || noMoreFlips) {
                setSeconds(seconds)
                setMinutes(minutes)
                return
            }
            setElapsedTime(elapsedTime + 1)
            let seconds = elapsedTime % 60
            let minutes = Math.floor(elapsedTime / 60)
            if(seconds < 10) seconds = `0${seconds}`
            if(minutes < 10) minutes = `0${minutes}`
            setSeconds(seconds)
            setMinutes(minutes)
        }, 1000)
    }, [elapsedTime, gameIsRunning, startGameTime, seconds, minutes, allSolved, noMoreFlips])

    const cards = cardsList.map((card, index) => <Card key={index} data={card} clicked={flipCard} isDisabled={!gameIsRunning} />)

    const endGameDialogParams = {
        title: "END GAME",
        message: "Are you flippin' sure??",
        cancelBtnText: "NO",
        confirmBtnText: "YES"
    }

    return <>
        <div className="card-grid-wrapper">
            <div className="fake counter-wrapper"></div>
            <div className="card-grid">
                { cards }
            </div>
            <div className="real counter-wrapper">
                <div className="counter-group flips">
                    <span>Flips Left</span>
                    <span className="counter">{userFlips}</span>
                </div>
                <div className="counter-group timer">
                    <span>Elapsed Time</span>
                    <span className="counter">{`${minutes}:${seconds}`}</span>
                </div>
                
                { 
                    gameIsRunning
                    ? <button className="btn" onClick={() => showDialog()}>End Game</button>
                    :<button className="btn" onClick={() => startGame()}>Start Game</button>
                }
            </div>
        </div>

        <AnimatePresence>
            { showModal &&
                <Dialog params={endGameDialogParams} confirm={endGameHandler} cancel={() => hideDialog()} />
            }
        </AnimatePresence>
    </>
}

CardGrid.propTypes = {
    flips: PropTypes.number,
    gameOver: PropTypes.func
}

export default CardGrid

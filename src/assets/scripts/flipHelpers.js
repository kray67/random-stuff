// Initial Cards Array
export const cardsArray = [
    { id: 1, group: 'red', emoji: '😂', isFlipped: false, isSolved: false },
    { id: 2, group: 'red', emoji: '😂', isFlipped: false, isSolved: false },
    { id: 3, group: 'green', emoji: '🥸', isFlipped: false, isSolved: false },
    { id: 4, group: 'green', emoji: '🥸', isFlipped: false, isSolved: false },
    { id: 5, group: 'blue', emoji: '🤬', isFlipped: false, isSolved: false },
    { id: 6, group: 'blue', emoji: '🤬', isFlipped: false, isSolved: false },
    { id: 7, group: 'yellow', emoji: '😱', isFlipped: false, isSolved: false },
    { id: 8, group: 'yellow', emoji: '😱', isFlipped: false, isSolved: false },
    { id: 9, group: 'purple', emoji: '🤮', isFlipped: false, isSolved: false },
    { id: 10, group: 'purple', emoji: '🤮', isFlipped: false, isSolved: false },
    { id: 11, group: 'orange', emoji: '🤠', isFlipped: false, isSolved: false },
    { id: 12, group: 'orange', emoji: '🤠', isFlipped: false, isSolved: false },
    { id: 13, group: 'lightgreen', emoji: '🤡', isFlipped: false, isSolved: false },
    { id: 14, group: 'lightgreen', emoji: '🤡', isFlipped: false, isSolved: false },
    { id: 15, group: 'teal', emoji: '😈', isFlipped: false, isSolved: false },
    { id: 16, group: 'teal', emoji: '😈', isFlipped: false, isSolved: false }
]

// Shuffle initial array positions
export const shuffleCards = (arr) => {
    return arr
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
}
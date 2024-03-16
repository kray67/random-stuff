export const generateRandomNumbers = (max) => {
    let num1 = Math.floor(Math.floor(Math.random() * max)) // Generates a random number between 0 and 4
    let num2 = Math.floor(Math.floor(Math.random() * max)) // Generates another random number between 0 and 4

    // Ensure num2 is different than num1
    while (num2 === num1) {
        num2 = Math.floor(Math.random() * max)
    }

    return {num1, num2}
}
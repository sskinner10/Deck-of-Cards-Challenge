import DeckOfCardsClient from "./DeckOfCardsClient.js"

const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
const deckId = await DeckOfCardsClient.getDeck(url)

const newHand = await DeckOfCardsClient.drawFiveCards(deckId)

newHand.sortHand()

console.log("------------")
console.log("Your Hand:")
newHand.showHand.forEach(card => {
    console.log(`${card.rank} of ${card.suit}`)
});
console.log("------------")
console.log("Your Hand's Score:")
const score = newHand.scoreHand()
console.log(score)
import got from "got"

import Card from "./Card.js"
import Hand from "./Hand.js"

class DeckOfCardsClient {
    static async getDeck(url) {
        try {
            const apiResponse = await got(url).json()

            const deckId = apiResponse.deck_id
            
            return deckId
        } catch (error) {
            return { error: error.message }
        }
    }

    static async drawFiveCards(deckId) {
        try {
            const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`

            const apiResponse = await got(url).json()

            const hand = new Hand()
            
            apiResponse.cards.forEach((card) => {
                const rank = card.value
                const suit = card.suit
                let value

                if (card.value === "JACK") {
                    value = 11
                } else if (card.value === "QUEEN") {
                    value = 12
                } else if (card.value === "KING") {
                    value = 13
                } else if (card.value === "ACE") {
                    value = 14
                } else {
                    value = parseInt(card.value)
                }

                hand.addCard(new Card(value, suit, rank))
    
            })

            return hand
        } catch (error) {
            return { error: error.message}
        }
    }
}
  
export default DeckOfCardsClient
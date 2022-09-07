import got from "got"

import Card from "./Card.js"
import Hand from "./Hand.js"

const aceLowStraight = ['5', '4', '3', '2', 'ACE']

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

            if (apiResponse.cards.every(card=> aceLowStraight.indexOf(card.value) >= 0)){
                const ace = apiResponse.cards.find((card) => {
                    if (card.value === "ACE") {
                        return true
                    } 

                    return false
                })

                ace.value = "ACE LOW"
            }
            
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
                } else if (card.value === "ACE LOW") {
                    value = 1
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
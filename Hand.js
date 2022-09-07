import Counter from "./Counter.js"

class Hand {
    constructor () {
        this.hand = []
    }

    get showHand () {
        return this.hand
    }

    addCard (card) {
        this.hand.push(card)
    }

    scoreHand () {
        const countObject = new Counter(this.createCardCount())
        const count = countObject.countCardsInHand()

        if (this.checkFlush()) {
            if (this.checkStraight()) {
                return ("Straight Flush")
            } else {
                return ("Flush")
            }
        } else if (count === 2) {
            if (countObject.checkFourOfAKind()) {
                return ("Four of a Kind")
            } else {
                return ("Full House")
            }
        } else if (this.checkStraight()) {
            return ("Straight")
        } else if (count === 3) {
            if (countObject.checkThreeOfAKind()) {
                return ("Three of a Kind")
            } else {
                return ("Two Pair")
            }
        } else if (countObject.checkOnePair()) {
            return ("One Pair")
        } else {
            return ("High Card")
        }
    }

    sortHand () {
        this.hand.sort((first, second) => first.value - second.value)
    }

    checkFlush ()  {
        return this.hand.every((card) => {return card.suit === this.hand[0].suit})
    }

    checkStraight () {
        return this.hand.every((card, index, array) => {
            if (card === array.at(-1)) {
                return true
            }
            let nextValue = array[index + 1].value

            return card.value === (nextValue - 1)
        })
    }

    createCardCount () {
        const numberOfCards = this.hand.reduce((allCards, card) => {
            allCards[card.rank] ?? (allCards[card.rank] = 0)
            allCards[card.rank]++
        
            return allCards
        }, {})

        return numberOfCards
    }
}

export default Hand
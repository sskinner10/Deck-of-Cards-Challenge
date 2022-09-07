class Counter {
    constructor (countObject) {
        this.counter = countObject
    }

    countCardsInHand () {
        return Object.keys(this.counter).length
    }
    
    checkFourOfAKind () {
        return Object.values(this.counter).includes(4)
    }
    
    checkThreeOfAKind () {
        return Object.values(this.counter).includes(3)
    }
    
    checkOnePair () {
        return Object.values(this.counter).includes(2)
    }
}

export default Counter
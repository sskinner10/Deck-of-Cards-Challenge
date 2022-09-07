import Card from "../Card.js"
import Hand from "../Hand.js"

describe("A hand", () => {
    let hand
    
    it("should be type of Hand", () => {
        hand = new Hand()
        expect(hand instanceof Hand).toBe(true)
    })

    describe("when a card is added to the hand", () => {
        it("should be added to the hand array", () => {
            hand = new Hand()
            hand.addCard(new Card(2, "CLUBS", "2"))
            expect(hand.hand[0].value).toEqual(2)
            expect(hand.hand[0].suit).toEqual("CLUBS")
            expect(hand.hand[0].rank).toEqual("2")
        })
    })

    describe("showing, sorting, and counting cards in a hand", () => {
        beforeEach(() => {
            hand = new Hand()
            for (let index = 6; index > 1; index--) {
                hand.addCard(new Card(index, "CLUBS", `${index}`))
            }
        })
        
        describe("when a hand is shown", () => {
            it("should return an array of five cards", () => {
                expect(hand.showHand.length).toEqual(5)
            })
        })
        
        describe("when a hand is sorted", () => {
            it("should order the cards in a hand from lowest value to highest value", () => {
                hand.sortHand()
                expect(hand.showHand[0].value).toEqual(2)
            })
        })

        describe("when a card count is created", () => {
            it("should create an object with a count of the number of different cards in hand", () => {
                const countObject = hand.createCardCount()

                expect(countObject['2']).toBe(1)
                expect(countObject['3']).toBe(1)
                expect(countObject['4']).toBe(1)
                expect(countObject['5']).toBe(1)
                expect(countObject['6']).toBe(1)
            })
        })
    })
        
    describe("check hand type for flush, straight, and straight flush", () => {
        beforeEach(() => {
            hand = new Hand()
            for (let index = 6; index > 1; index--) {
                hand.addCard(new Card(index, "CLUBS", `${index}`))
            }
            hand.sortHand()
        })

        describe("when a hand is a flush", () => {
            it("should return true for flush", () => {
                debugger
                expect(hand.checkFlush()).toBe(true)
            })
        })

        describe("when a hand is a straight", () => {
            it("should return true for straight", () => {
                expect(hand.checkStraight()).toBe(true)
            })
        })

        describe("when a hand is a straight flush", () => {
            it("should return true straight flush", () => {
                expect(hand.checkFlush() && hand.checkStraight()).toBe(true)
            })
        })
    })

    describe("scoring a hand", () => {
        beforeEach(() => {
            hand = new Hand()
        })

        describe("when a hand it a straight flush", () => {
            it("should return 'Straight Flush'", () => {
                for (let index = 6; index > 1; index--) {
                    hand.addCard(new Card(index, "CLUBS", `${index}`))
                }
                hand.sortHand()
                expect(hand.scoreHand()).toEqual("Straight Flush")
            })
        })
    })
})


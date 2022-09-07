import Counter from "../Counter.js"

describe("A counter", () => {
    let counter

    it("should be type of Counter", () => {
        counter = new Counter({"2": 1, "3": 1, "4": 1, "5": 1, "6": 1,})
        expect(counter instanceof Counter).toBe(true)
    })

    describe("when a countObject is counted", () => {
        it("should return the number of key-value pairs in the object", () => {
            counter = new Counter({"2": 1, "3": 1, "4": 1, "5": 1, "6": 1,})
            const count = counter.countCardsInHand()
            expect(count).toEqual(5)
        })
    })

    describe("check hand type for pair, three of a kind, and four of a kind", () => {
        describe("when a hand is a four of a kind", () => {
            it("should return true for four of a kind", () => {
                counter = new Counter({"2": 1, "3": 4})
                expect(counter.checkFourOfAKind()).toBe(true)
            })
        })

        describe("when a hand is a three of a kind", () => {
            it("should return true for three of a kind", () => {
                counter = new Counter({"2": 1, "3": 3, "4": 1})
                expect(counter.checkThreeOfAKind()).toBe(true)
            })
        })

        describe("when a hand is a pair", () => {
            it("should return true for one pair", () => {
                counter = new Counter({"2": 2, "3": 1, "4": 1, "5": 1})
                expect(counter.checkOnePair()).toBe(true)
            })
        })
    })
})
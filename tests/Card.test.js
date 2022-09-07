import Card from "../Card.js"

describe("A card", () => {
    it("should be type of Card", () => {
        const card = new Card(2, "HEARTS", "2")
        expect(card instanceof Card).toBe(true)
    })
})
import { expect } from "chai"
import "mocha"

import { fibonacci } from ".."

describe("Fibonacci tests", () => {

    it("should throw for negative number", async () => {
        expect(() => fibonacci(-1)).to.throw()
    })

    it("should throw for 0", async () => {
        expect(() => fibonacci(0)).to.throw()
    })

    it("should throw for non integer number", async () => {
        expect(() => fibonacci(1.43)).to.throw()
    })

    it("should return 1 for first item", () => {
        expect(fibonacci(1)).to.equal(1)
    })

    it("should return 1 for second item", () => {
        expect(fibonacci(2)).to.equal(1)
    })

    it("should return 89 for 11th item", () => {
        expect(fibonacci(11)).to.equal(89)
    })
})

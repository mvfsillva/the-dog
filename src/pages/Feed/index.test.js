const index = require("./index")

// @ponicode
describe("componentDidMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Pierre Edouard", "Edmond", "Jean-Philippe"], ["Jean-Philippe", "Jean-Philippe", "Anas"], ["Anas", "Anas", "George"]]
        inst = new index.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

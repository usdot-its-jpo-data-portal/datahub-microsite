describe("JS usage", () => {
    it("Support require default export", () => {
        var $ = require("../dist/index")
        expect($().jquery).toEqual("3.3.1");
    });
});
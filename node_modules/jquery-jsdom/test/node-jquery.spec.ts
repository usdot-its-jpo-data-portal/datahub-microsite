import $ from '../index';
import * as fs from 'fs';

describe("Node jquery", () => {
    it("Should be defined", () => {
        expect($).toBeDefined();
    });

    it("Should wrap jquery 3.3.1", () => {
        expect($().jquery).toBe("3.3.1")
    });

    it("Should parse basic DOM", () => {
        expect($("<a>DOM</a>").html()).toEqual("DOM");
    });

    it("Should parse DOM", () => {
        const html = fs.readFileSync("test/parse.html").toString();
        expect($(html).find("article").length).toEqual(2);
    });

});
import "mocha";
import { expect } from "chai";
import Point from "../src/Point";

describe("test Point", () => {
    it("test default constructor", () => {
        const p = new Point();
        expect(p.getCoordinate()).to.deep.equal([NaN,NaN]);
        expect(Number.isNaN(p.x()));
        expect(Number.isNaN(p.y()));
    });
    it("test constructor with coordinates", () => {
        const p = new Point([3.0,4.0]);
        expect(p.getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
        expect(p.getType()).to.equal("Point");
    });

    it("test isEmpty", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point();
        expect(p1.isEmpty()).to.equal(false);
        expect(p2.isEmpty()).to.equal(true);
    });

    it("test translate", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point();
        p1.translate(1.0,1.0)
        p2.translate(1.0,1.0)
        expect(p1.getCoordinate()).to.deep.equal([4.0,5.0]);
        expect(p2.getCoordinate()).to.deep.equal([NaN,NaN]);
    });

    it("test clone", () => {
        const p = new Point([3.0,4.0]);
        const p_clone = p.clone()
        expect(p_clone.getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
        expect(p.getType()).to.equal("Point");

    })
})


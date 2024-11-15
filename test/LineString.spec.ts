import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString"

describe("test LineString", () => {
    it("test default constructor", () => {
        const l = new LineString();
        expect(Number.isNaN(l.getNumPoints()));
        
    });

    it("test constructor with Points", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([5.0,6.0]);
        const l = new LineString([p1,p2]);
        expect(l.getNumPoints()).to.equal(2);
        expect(l.getPointN(1)).to.equal(p2);
        expect(l.getType()).to.equal("LineString");
    });

    it("test isEmpty", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([5.0,6.0]);
        const l = new LineString([p1,p2]);
        const l2 = new LineString();
        expect(l.isEmpty()).to.equal(false);
        expect(l2.isEmpty()).to.equal(true);
    });

    it("test translate", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([5.0,6.0]);
        const l = new LineString([p1,p2]);
        l.translate(1.0,1.0);
        const pt_result = new Point([4.0,5.0])
        expect(l.getPointN(0)).to.deep.equal(pt_result);
        
    });

    it("test copy", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([5.0,6.0]);
        const l = new LineString([p1,p2]);
        const copy = l.clone();
        copy.translate(10.0,10.0);
        const pt_result = new Point([13.0,14.0])
        expect(copy.getPointN(0)).to.deep.equal(pt_result);
        expect(l.getPointN(1)).to.equal(p2);
    });

    it("test envelope sur linestring", () => {
        const points = [new Point([1.0, 2.0]), new Point([3.0, 4.0])];
        const lineString = new LineString(points);
        const envelope = lineString.getEnvelope();
    
        expect(envelope.isEmpty()).to.be.false;
        expect(envelope.getXmin()).to.equal(1.0);
        expect(envelope.getYmin()).to.equal(2.0);
        expect(envelope.getXmax()).to.equal(3.0);
        expect(envelope.getYmax()).to.equal(4.0);
      });
    
      it("test envelope vide sur linestring", () => {
        const lineString = new LineString();
        const envelope = lineString.getEnvelope();
    
        expect(envelope.isEmpty()).to.be.true;
      });
    
});
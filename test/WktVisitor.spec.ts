import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import WktVisitor from "../src/WktVisitor";

describe("WktVisitor Tests", () => {
    const writer = new WktVisitor();

    it("test WKT pour un point", () => {
        const point = new Point([3.0, 4.0]);
        writer.visitPoint(point)
        expect(writer.getResult()).to.equal("POINT(3 4)");
    });

    it("test WKT pour un point vide", () => {
        const point = new Point();
        writer.visitPoint(point)
        expect(writer.getResult()).to.equal("POINT EMPTY");
    });

    it("test WKT pour une LineString", () => {
        const lineString = new LineString([
            new Point([0.0, 0.0]),
            new Point([1.0, 1.0]),
            new Point([5.0, 5.0]),
        ]);
        writer.visitLineString(lineString)
        expect(writer.getResult()).to.equal("LINESTRING(0 0,1 1,5 5)");
    });

    it("test WKT pour une LineString vide", () => {
        const lineString = new LineString();
        writer.visitLineString(lineString)
        expect(writer.getResult()).to.equal("LINESTRING EMPTY");
    });

});
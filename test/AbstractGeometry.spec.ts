import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("AbstractGeometry and WktVisitor Tests", () => {
    it("should return WKT for a Point", () => {
        const point = new Point([2.0, 3.0]);
        expect(point.asText()).to.equal("POINT(2 3)");
    });

    it("should return WKT for an empty Point", () => {
        const point = new Point();
        expect(point.asText()).to.equal("POINT EMPTY");
    });

    it("should return WKT for a LineString", () => {
        const lineString = new LineString([
            new Point([0.0, 0.0]),
            new Point([1.0, 1.0]),
            new Point([2.0, 2.0]),
        ]);
        expect(lineString.asText()).to.equal("LINESTRING(0 0,1 1,2 2)");
    });

    it("should return WKT for an empty LineString", () => {
        const lineString = new LineString();
        expect(lineString.asText()).to.equal("LINESTRING EMPTY");
    });
});

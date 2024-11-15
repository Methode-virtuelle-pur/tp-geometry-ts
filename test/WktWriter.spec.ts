import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import WktWriter from "../src/WktWriter";

describe("WktWriter Tests", () => {
    const writer = new WktWriter();

    it("test WKT pour un point", () => {
        const point = new Point([3.0, 4.0]);
        expect(writer.write(point)).to.equal("POINT(3 4)");
    });

    it("test WKT pour un point vide", () => {
        const point = new Point();
        expect(writer.write(point)).to.equal("POINT EMPTY");
    });

    it("test WKT pour une LineString", () => {
        const lineString = new LineString([
            new Point([0.0, 0.0]),
            new Point([1.0, 1.0]),
            new Point([5.0, 5.0]),
        ]);
        expect(writer.write(lineString)).to.equal("LINESTRING(0 0,1 1,5 5)");
    });

    it("test WKT pour une LineString vide", () => {
        const lineString = new LineString();
        expect(writer.write(lineString)).to.equal("LINESTRING EMPTY");
    });

    it("test WTK pour un mauvais type de geometry", () => {
        class UnsupportedGeometry {}
        const unsupported = new (UnsupportedGeometry as any)(); // Simule un type inconnu
        expect(() => writer.write(unsupported)).to.throw(TypeError, "Geometry type not supported");
    });
});

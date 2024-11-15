import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import LogGeometryVisitor from "../src/LogGeometryVisitor";


describe("LogGeometryVisitor Tests", () => {
    it("test visitPoint with coordinates", () => {
        let result = "";
        const visitor = new LogGeometryVisitor(function(message){
            result = message;
        });
        const geometry = new Point([3.0,4.0]);
        geometry.accept(visitor);
        expect(result).to.deep.equal("Je suis un point avec x=3 et y=4.");
    });

    it("test visitPoint with coordinates", () => {
        let result = "";
        const visitor = new LogGeometryVisitor(function(message){
            result = message;
        });
        const geometry = new Point([]);
        geometry.accept(visitor);
        expect(result).to.deep.equal("Je suis un point vide.");
    });

    it("test visitLineString with coordinates", () => {
        let result = "";
        const visitor = new LogGeometryVisitor(function(message){
            result = message;
        });
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([5.0,6.0]);
        const geometry = new LineString([p1,p2]);
        geometry.accept(visitor);
        expect(result).to.deep.equal("Je suis une polyligne définie par 2 point(s).");
    });

    it("test visitLineString with coordinates", () => {
        let result = "";
        const visitor = new LogGeometryVisitor(function(message){
            result = message;
        });
        const geometry = new LineString();
        geometry.accept(visitor);
        expect(result).to.deep.equal("Je suis une polyligne vide.");
    });
});
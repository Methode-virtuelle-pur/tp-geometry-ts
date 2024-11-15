import { expect } from "chai";
import Coordinate from "../src/Coordinate";
import Envelope from "../src/Envelope";
import EnvelopeBuilder from "../src/EnvelopeBuilder";

describe("EnvelopeBuilder Tests", () => {
    it("test constructeur", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([0.0, 1.0]);
        builder.insert([2.0, 0.0]);
        builder.insert([1.0, 3.0]);

        const envelope = builder.build();

        expect(envelope.isEmpty()).to.be.false;
        expect(envelope.getXmin()).to.equal(0.0);
        expect(envelope.getYmin()).to.equal(0.0);
        expect(envelope.getXmax()).to.equal(2.0);
        expect(envelope.getYmax()).to.equal(3.0);
    });

    it("envelope vide si moins de 2 points", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([0.0, 1.0]);

        const envelope = builder.build();

        expect(envelope.isEmpty()).to.be.true;
    });

    it("envelope vide sans point", () => {
        const builder = new EnvelopeBuilder();

        const envelope = builder.build();

        expect(envelope.isEmpty()).to.be.true;
    });
    it("test to string", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([0.0, 1.0]);
        builder.insert([2.0, 0.0]);
        builder.insert([1.0, 3.0]);

        const envelope = builder.build();

        // Vérification de la méthode toString()
        const expectedString = "0,0,2,3"; // xmin, ymin, xmax, ymax
        expect(envelope.toString()).to.equal(expectedString);
    });

    it("test to string null", () => {
        const builder = new EnvelopeBuilder();
        const envelope = builder.build(); // Enveloppe vide

        // Vérification pour une enveloppe vide
        const expectedString = "NaN,NaN,NaN,NaN";
        expect(envelope.toString()).to.equal(expectedString);
    });
});

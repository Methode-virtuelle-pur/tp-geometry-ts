import Coordinate from "./Coordinate";
import Envelope from "./Envelope";

export default class EnvelopeBuilder {
    private xVals: number[] = [];
    private yVals: number[] = [];

    build(): Envelope {
        if (this.xVals.length >= 2 && this.yVals.length >= 2) {
            const xmin = Math.min(...this.xVals);
            const xmax = Math.max(...this.xVals);
            const ymin = Math.min(...this.yVals);
            const ymax = Math.max(...this.yVals);

            return new Envelope([xmin, ymin], [xmax, ymax]);
        } else {
            // Retourne une enveloppe vide
            return new Envelope([NaN, NaN], [NaN, NaN]);
        }
    }

    insert(coordinate: Coordinate): void {
        this.xVals.push(coordinate[0]);
        this.yVals.push(coordinate[1]);
    }
}

type Coordinate = Array<number>;

export default class Envelope {
    private bottomLeft: Coordinate;
    private topRight: Coordinate;

    constructor(bottomLeft?: Coordinate, topRight?: Coordinate) {
        this.bottomLeft = bottomLeft || [NaN, NaN];
        this.topRight = topRight || [NaN, NaN];
    }

    isEmpty(): boolean {
        return (
            isNaN(this.bottomLeft[0]) ||
            isNaN(this.bottomLeft[1]) ||
            isNaN(this.topRight[0]) ||
            isNaN(this.topRight[1])
        );
    }

    getXmin(): number {
        return this.bottomLeft[0];
    }

    getYmin(): number {
        return this.bottomLeft[1];
    }

    getXmax(): number {
        return this.topRight[0];
    }

    getYmax(): number {
        return this.topRight[1];
    }

    toString(): string {
        return `${this.getXmin()},${this.getYmin()},${this.getXmax()},${this.getYmax()}`;
    }
}

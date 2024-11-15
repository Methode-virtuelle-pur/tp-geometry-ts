import Point from "./Point";
import LineString from "./LineString";
import Geometry from "./Geometry";

export default class WktWriter {
    write(geometry: Geometry): string {
        if (geometry instanceof Point) {
            return this.Point(geometry);
        } else if (geometry instanceof LineString) {
            return this.LineString(geometry);
        } else {
            throw new TypeError("Geometry type not supported");
        }
    }

    private Point(point: Point): string {
        if (point.isEmpty()) {
            return "POINT EMPTY";
        }
        return `POINT(${point.x()} ${point.y()})`;
    }

    private LineString(lineString: LineString): string {
        if (lineString.isEmpty()) {
            return "LINESTRING EMPTY";
        }

        const coordinates = [];
        for (let i = 0; i < lineString.getNumPoints(); i++) {
            const point = lineString.getPointN(i);
            coordinates.push(`${point.x()} ${point.y()}`);
        }

        return `LINESTRING(${coordinates.join(",")})`;
    }
}

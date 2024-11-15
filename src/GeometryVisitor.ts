import Point from "./Point"
import LineString from "./LineString"

export default interface GeometryVisitor {
    visitPoint(Point : Point) : void
    visitLineString(LineString : LineString) : void
}
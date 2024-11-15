import Coordinate from "./Coordinate";

import Envelope from "./Envelope";
import GeometryVisitor from "./GeometryVisitor";
import AbstractGeometry from "./AbstractGeometry";

export default class Point extends AbstractGeometry {
  private coordinate?: Coordinate;

  constructor(coordinate?: Coordinate) {
    super();
    if (undefined == coordinate)
      this.coordinate = [NaN,NaN] ;
    else
      this.coordinate = coordinate ;
  }

  getCoordinate(): Coordinate {
    return this.coordinate;
  }

  getType(): string {
    return "Point";
  }

  x(): number {
    return !this.isEmpty() ? this.coordinate[0] : Number.NaN ;
  }

  y(): number {
    return !this.isEmpty() ? this.coordinate[1] : Number.NaN ;
  }

  isEmpty(): boolean {
    return isNaN(this.coordinate[0]) || isNaN(this.coordinate[1]);
  }

  translate(dx: number, dy: number) {
    this.coordinate[0] = this.coordinate[0] + dx
    this.coordinate[1] = this.coordinate[1] + dy
  }

  clone(): Point {
    return new Point([this.x(),this.y()]) ;
  }

  getEnvelope(): Envelope {
    
    if (this.isEmpty()) {
      return new Envelope(); 
    }
    return new Envelope(this.coordinate, this.coordinate); 
  }

  accept(visitor: GeometryVisitor): void {
    visitor.visitPoint(this);
  } 

}

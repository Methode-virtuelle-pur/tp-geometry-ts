import Point from "./Point";
import Geometry from "./Geometry";
import Envelope from "./Envelope";
import GeometryVisitor from "./GeometryVisitor";

export default class LineString implements Geometry {
   private points?: Array<Point>;

  constructor(points?: Array<Point>) {
   this.points = points;
  }
  getNumPoints(): number {
    if (null == this.points)
        return 0;
    return this.points.length;
  }

  getPointN(n:number): Point {
    return this.points[n];
  }

  getType(): string {
    return "LineString";
  }

  isEmpty(): boolean {
    if (null == this.points)
        return true ;
    else
        return false ;
  }

  translate(dx: number, dy: number) {
    this.points.forEach(pt => {
        pt.translate(dx,dy)
    });
  }

  clone(): LineString {
    let l : Array<Point> = [];
    for (const point of this.points){
      l.push(point.clone());
    }
    return new LineString(l);
  }

  getEnvelope(): Envelope {
    if (this.isEmpty()) {
      return new Envelope(); 
    }

    const xVals = this.points.map(point => point.x());
    const yVals = this.points.map(point => point.y());

    const xmin = Math.min(...xVals);
    const xmax = Math.max(...xVals);
    const ymin = Math.min(...yVals);
    const ymax = Math.max(...yVals);

    return new Envelope([xmin, ymin], [xmax, ymax]);
  }

  accept(visitor: GeometryVisitor): void {
    visitor.visitLineString(this);
  }

}

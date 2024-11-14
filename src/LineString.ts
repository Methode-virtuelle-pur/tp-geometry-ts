import Point from "./Point";
import Geometry from "./Geometry";

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

}

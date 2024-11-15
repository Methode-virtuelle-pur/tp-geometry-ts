import Envelope from "./Envelope";
import Geometry from "./Geometry";
import WktVisitor from "./WktVisitor";

export default abstract class AbstractGeometry implements Geometry {
    abstract getType() : string;
    abstract isEmpty() : boolean;
    abstract translate(dx : number, dy : number) : any;
    abstract clone() : Geometry ; 
    abstract getEnvelope(): Envelope
    abstract accept(visitor: WktVisitor): void;

    asText(): string {
        const visitor = new WktVisitor();
        this.accept(visitor);
        return visitor.getResult();
    }

}
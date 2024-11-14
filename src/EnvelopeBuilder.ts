import Coordinate from "./Coordinate";


export default class EnvelopeBuilder {
    private xVals : Array<number>;
    private yVals : Array<number>;

    build(){
        this.xVals.forEach(elem => {
           let xmin = Math.min(elem)
           let xmax = Math.max(elem)
            
        });

        this.yVals.forEach(elem => {
            let ymin = Math.min(elem)
            let ymax = Math.max(elem)
            
        });
        
        return ;
    }

    insert(coordinate : Coordinate){
        this.xVals.push(coordinate[0]);
        this.yVals.push(coordinate[1]); 
    }

}

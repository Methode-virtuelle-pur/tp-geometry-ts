import Coordinate from "./Coordinate";


export default class Envelope {
    private bottomLeft : Coordinate ;
    private topRight : Coordinate ;

    constructor(bottomLeft ? : Coordinate, topRight ?: Coordinate) {
        bottomLeft = this.bottomLeft;
        topRight = this.topRight;
        
    }
    
    isEmpty(): boolean {
        return isNaN(this.bottomLeft[0]) || isNaN(this.bottomLeft[1] || this.topRight[0]) || isNaN(this.topRight[1]);
    }

    getXmin() : number {
        if (this.bottomLeft[0] >= this.topRight[0])
            return this.topRight[0]
        else
            return this.bottomLeft[0]
    }

    getYmin() : number {
        if (this.bottomLeft[1] >= this.topRight[1])
            return this.topRight[1]
        else
            return this.bottomLeft[1]
    }

    getXmax() : number {
        if (this.bottomLeft[0] >= this.topRight[0])
            return this.bottomLeft[0]
        else
            return this.topRight[0]
    }

    getYmax() : number {
        if (this.bottomLeft[1] >= this.topRight[1])
            return this.bottomLeft[1]
        else
            return this.topRight[1]
    }

    toString() : string{
        return 'intervalle x est de : ['+ this.getXmin() +' , ' + this.getXmax()+'] \n' +
               'intervalle y est de : ['+ this.getYmin() +' , ' + this.getYmax()+'] \n'
    }
}
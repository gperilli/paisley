import { PaisleyBlocksSSize_Flower } from '/jsm/paisleyBlocks/paisleyBlocksSSize_Flower.js'
import { PaisleyBlocksSSize_Drop1 } from '/jsm/paisleyBlocks/paisleyBlocksSSize_Drop1.js'
import { PaisleyBlocksMSize_Drop1 } from '/jsm/paisleyBlocks/paisleyBlocksMSize_Drop1.js'

export { LSizePaisleyBlock }
export { mainSquarePositioning }

class LSizePaisleyBlock {
    static count = 0;
    static paisleyVectors = [PaisleyBlocksSSize_Drop1, PaisleyBlocksSSize_Flower]; //PaisleyBlocksMSize_Drop1
    constructor(lSizePaisleyBlockParams) {
        this.instanceN = ++LSizePaisleyBlock.count
        this.width = lSizePaisleyBlockParams.width
        this.height = lSizePaisleyBlockParams.width
        this.fadeIn = lSizePaisleyBlockParams.fadeIn
        this.coloring = lSizePaisleyBlockParams.coloring
        

        this.leftOffset = lSizePaisleyBlockParams.leftOffset
        this.topOffset = lSizePaisleyBlockParams.topOffset
        this.rotation = lSizePaisleyBlockParams.rotation
        this.element = `<div id="LSizePaisleyBlock-${this.instanceN}" class="outline" style="position: absolute;"></div>`
        this.elementSelector = `#LSizePaisleyBlock-${this.instanceN}`
        this.paisleyVectorClassNames = `paisley-lsize-block-components-pblock-${this.instanceN}`
        this.paisleyVectorInstance = new LSizePaisleyBlock.paisleyVectors[Math.floor(Math.random() * 2)](this.paisleyVectorClassNames, this.fadeIn, this.coloring)
        this.paisleyVector = this.paisleyVectorInstance.vectorCode()
        //console.log(this.paisleyVector);
    }
}

function mainSquarePositioning(mainSquare) {
    document.querySelector(mainSquare.elementSelector).style.width = mainSquare.width + "px";
    document.querySelector(mainSquare.elementSelector).style.height = mainSquare.width + "px";
    document.querySelector(mainSquare.elementSelector).style.left = mainSquare.leftOffset + "px";
    document.querySelector(mainSquare.elementSelector).style.top = mainSquare.topOffset + "px";
}
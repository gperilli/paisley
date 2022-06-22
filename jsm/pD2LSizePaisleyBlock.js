import { PaisleyBlocksLSizeBlock1Vector } from '/jsm/paisleyBlocks/paisleyBlocksLSizeBlock1.js'
export { LSizePaisleyBlock }
export { mainSquarePositioning }

class LSizePaisleyBlock {
    static count = 0;
    constructor(lSizePaisleyBlockParams) {
        this.instanceN = ++LSizePaisleyBlock.count
        this.width = lSizePaisleyBlockParams.width
        this.height = lSizePaisleyBlockParams.width
        this.leftOffset = lSizePaisleyBlockParams.leftOffset
        this.topOffset = lSizePaisleyBlockParams.topOffset
        this.rotation = lSizePaisleyBlockParams.rotation
        this.element = `<div id="LSizePaisleyBlock-${this.instanceN}" class="outline" style="position: absolute;"></div>`
        this.elementSelector = `#LSizePaisleyBlock-${this.instanceN}`
        this.paisleyVectorClassNames = `paisley-lsize-block-components-pblock-${this.instanceN}`
        this.paisleyVectorInstance = new PaisleyBlocksLSizeBlock1Vector(this.paisleyVectorClassNames)
        this.paisleyVector = this.paisleyVectorInstance.vectorCode
    }
}

function mainSquarePositioning(mainSquare) {
    document.querySelector(mainSquare.elementSelector).style.width = mainSquare.width + "px";
    document.querySelector(mainSquare.elementSelector).style.height = mainSquare.width + "px";
    document.querySelector(mainSquare.elementSelector).style.left = mainSquare.leftOffset + "px";
    document.querySelector(mainSquare.elementSelector).style.top = mainSquare.topOffset + "px";
}
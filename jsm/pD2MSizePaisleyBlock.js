import { PaisleyBlocksMSizeBlock1Vector } from '/jsm/paisleyBlocks/paisleyBlocksMSizeBlock1.js'
export { MSizePaisleyBlock }
export { topLeftPeripherySquarePositioning }
export { bottomLeftPeripherySquarePositioning }

class MSizePaisleyBlock {
    static count = 0;
    constructor(mSizePaisleyBlockParams) {
        this.instanceN = ++MSizePaisleyBlock.count
        this.width = mSizePaisleyBlockParams.width
        this.height = mSizePaisleyBlockParams.width
        this.leftOffset = mSizePaisleyBlockParams.leftOffset
        this.topOffset = mSizePaisleyBlockParams.topOffset
        this.rotation = mSizePaisleyBlockParams.rotation
        this.element = `<div id="MSizePaisleyBlock-${this.instanceN}" class="outline" style="position: relative;"></div>`
        this.elementSelector = `#MSizePaisleyBlock-${this.instanceN}`
        this.paisleyVectorClassNames = `paisley-msize-block-components-pblock-${this.instanceN}`
        this.paisleyVectorInstance = new PaisleyBlocksMSizeBlock1Vector(this.paisleyVectorClassNames)
        this.paisleyVector = this.paisleyVectorInstance.vectorCode
    }
}

function topLeftPeripherySquarePositioning(topLeftPeripherySquare) {
    document.querySelector(topLeftPeripherySquare.elementSelector).style.width = topLeftPeripherySquare.width + "px"
    document.querySelector(topLeftPeripherySquare.elementSelector).style.height = topLeftPeripherySquare.width + "px"
    document.querySelector(topLeftPeripherySquare.elementSelector).style.left = topLeftPeripherySquare.leftOffset + "px"
    document.querySelector(topLeftPeripherySquare.elementSelector).style.top = topLeftPeripherySquare.toptOffset + "px"
}

function bottomLeftPeripherySquarePositioning(bottomLeftPeripherySquare) {
    document.querySelector(bottomLeftPeripherySquare.elementSelector).style.width = bottomLeftPeripherySquare.width + "px"
    document.querySelector(bottomLeftPeripherySquare.elementSelector).style.height = bottomLeftPeripherySquare.width + "px"
    document.querySelector(bottomLeftPeripherySquare.elementSelector).style.left = bottomLeftPeripherySquare.leftOffset + "px"
    document.querySelector(bottomLeftPeripherySquare.elementSelector).style.top = bottomLeftPeripherySquare.topOffset  + "px"
}
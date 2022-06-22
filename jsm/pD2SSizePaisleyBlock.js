import { PaisleyBlocksSSizeBlock1Vector } from '/jsm/paisleyBlocks/paisleyBlocksSSizeBlock1.js'
export { SSizePaisleyBlock }
export { topSidePeripherySquarePositioning }
export { bottomSidePeripherySquarePositioning }

class SSizePaisleyBlock {
    static count = 0;
    constructor(sSizePaisleyBlockParams) {
        this.instanceN = ++SSizePaisleyBlock.count
        this.width = sSizePaisleyBlockParams.width
        this.height = sSizePaisleyBlockParams.width
        this.position = sSizePaisleyBlockParams.position
        this.leftOffset = sSizePaisleyBlockParams.leftOffset
        this.topOffset = sSizePaisleyBlockParams.topOffset
        this.rotation = sSizePaisleyBlockParams.rotation
        this.element = `<div id="SSizePaisleyBlock-${this.instanceN}" class="outline" style="position: absolute;"></div>`
        this.elementSelector = `#SSizePaisleyBlock-${this.instanceN}`
        this.paisleyVectorClassNames = `paisley-ssize-block-components-pblock-${this.instanceN}`
        this.paisleyVectorInstance = new PaisleyBlocksSSizeBlock1Vector(this.paisleyVectorClassNames)
        this.paisleyVector = this.paisleyVectorInstance.vectorCode
    }
}

function topSidePeripherySquarePositioning(topSidePeripherySquare) {
    document.querySelector(topSidePeripherySquare.elementSelector).style.width = topSidePeripherySquare.width + "px"
    document.querySelector(topSidePeripherySquare.elementSelector).style.height = topSidePeripherySquare.width + "px"
    document.querySelector(topSidePeripherySquare.elementSelector).style.left = topSidePeripherySquare.leftOffset + "px"
    document.querySelector(topSidePeripherySquare.elementSelector).style.top = topSidePeripherySquare.topOffset + "px"
}

function bottomSidePeripherySquarePositioning(bottomSidePeripherySquare) {
    document.querySelector(bottomSidePeripherySquare.elementSelector).style.left = bottomSidePeripherySquare.leftOffset  + "px"
    document.querySelector(bottomSidePeripherySquare.elementSelector).style.top = bottomSidePeripherySquare.topOffset  + "px"
    document.querySelector(bottomSidePeripherySquare.elementSelector).style.width = bottomSidePeripherySquare.width + "px"
    document.querySelector(bottomSidePeripherySquare.elementSelector).style.height = bottomSidePeripherySquare.width + "px"
}
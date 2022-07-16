import { PaisleyBlocksSSize_Flower } from '/jsm/paisleyBlocks/paisleyBlocksSSize_Flower.js'
import { PaisleyBlocksSSize_Drop1 } from '/jsm/paisleyBlocks/paisleyBlocksSSize_Drop1.js'
export { SSizePaisleyBlock }
export { topSidePeripherySquarePositioning }
export { bottomSidePeripherySquarePositioning }

class SSizePaisleyBlock {
    static count = 0;
    static paisleyVectors = [PaisleyBlocksSSize_Drop1, PaisleyBlocksSSize_Flower];
    constructor(sSizePaisleyBlockParams) {
        
        this.instanceN = ++SSizePaisleyBlock.count
        this.width = sSizePaisleyBlockParams.width
        this.height = sSizePaisleyBlockParams.width
        this.position = sSizePaisleyBlockParams.position
        this.leftOffset = sSizePaisleyBlockParams.leftOffset
        this.topOffset = sSizePaisleyBlockParams.topOffset
        this.rotation = sSizePaisleyBlockParams.rotation
        this.containerSquare = sSizePaisleyBlockParams.containerSquare
        this.element = `<div id="SSizePaisleyBlock-${this.instanceN}" class="outline" style="position: absolute;"></div>`
        //this.element.transform = `rotate(${this.rotation * 90}deg)`;
        this.elementSelector = `#SSizePaisleyBlock-${this.instanceN}`
        this.paisleyVectorClassNames = `paisley-ssize-block-components-pblock-${this.instanceN}`
        this.paisleyVectorInstance = new SSizePaisleyBlock.paisleyVectors[Math.floor(Math.random() * 2)](this.paisleyVectorClassNames)
        this.paisleyVector = this.paisleyVectorInstance.vectorCode
        this.init()
    }

    init() {
        this.containerSquare.insertAdjacentHTML("beforeend", this.element);
        document.querySelector(this.elementSelector).style.transform = `rotate(${this.rotation * 90}deg)`;
        document.querySelector(this.elementSelector).insertAdjacentHTML("beforeend", this.paisleyVector)
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
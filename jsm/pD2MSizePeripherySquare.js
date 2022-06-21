export { MSizePeripherySquare }
export { topLeftPeripherySquarePositioning }
export { bottomLeftPeripherySquarePositioning }

class MSizePeripherySquare {
    constructor(width, left, top, rotation, n) {
        this.width = width
        this.height = width
        this.leftOffset = left
        this.topOffset = top
        this.rotation = rotation
        this.element = `<div id="MSizePeripherySquare-${n}" class="outline" style="position: relative;"></div>`
        this.elementSelector = `#MSizePeripherySquare-${n}`
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
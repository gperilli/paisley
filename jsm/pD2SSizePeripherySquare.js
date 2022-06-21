export { SSizePeripherySquare }
export { topSidePeripherySquarePositioning }
export { bottomSidePeripherySquarePositioning }

class SSizePeripherySquare {
    constructor(width, left, top, position, rotation, n) {
        this.width = width
        this.height = width
        this.position = position
        this.leftOffset = left
        this.topOffset = top
        this.rotation = rotation
        this.element = `<div id="SSizePeripherySquare-${n}" class="outline" style="position: absolute;"></div>`
        this.elementSelector = `#SSizePeripherySquare-${n}`
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
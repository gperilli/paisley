export { LSizeMainSquare }
export { mainSquarePositioning }

class LSizeMainSquare {
    constructor(width, left, top, rotation, n) {
        this.width = width
        this.height = width
        this.leftOffset = left
        this.topOffset = top
        this.rotation = rotation
        this.element = `<div id="LSizeMainSquare-${n}" class="outline" style="position: absolute;"></div>`
        this.elementSelector = `#LSizeMainSquare-${n}`
    }
}

function mainSquarePositioning(mainSquare) {
    document.querySelector(mainSquare.elementSelector).style.width = mainSquare.width + "px";
    document.querySelector(mainSquare.elementSelector).style.height = mainSquare.width + "px";
    document.querySelector(mainSquare.elementSelector).style.left = mainSquare.leftOffset + "px";
    document.querySelector(mainSquare.elementSelector).style.top = mainSquare.topOffset + "px";
}
function setLayout() {
    // Get screen size
    const body = document.querySelector("body");
    let bodyWidth = body.clientWidth;
    let bodyHeight = body.clientHeight;
    let screenWidth = window.innerWidth;
	let screenHeight = window.innerHeight;
    let centralContainerSquareWidth, centralContainerXOffset, centralContainerYOffset;
    //Set layout of UI Column, bottom/side creator link, and 2 content squares
    console.log(`Screen height: ${screenHeight}, screen width: ${screenWidth}`);
    console.log(`Body height: ${bodyHeight}, body width: ${bodyWidth}`);

    // determine portrait or landscape
    if (screenWidth > screenHeight) {
        centralContainerSquareWidth = screenHeight;
        centralContainerXOffset = ((screenWidth - screenHeight) / 2);
        centralContainerYOffset = 0;
        console.log(`Landscape Screen. Central container square width: ${centralContainerSquareWidth}`);
    } else {
        centralContainerSquareWidth = screenWidth;
        centralContainerXOffset = 0;
        centralContainerYOffset = ((screenHeight - screenWidth) / 2);
        console.log(`Portait Screen. Central container square width: ${centralContainerSquareWidth}`);
    }

    // Only insert element first time
    if (document.querySelector("#centralContainerSquare") == null) {
        //console.log("null element detected")
        const centralContainerSquareElement = `<div id="centralContainerSquare" class="outline" style="position: absolute;"></div>`;
        body.insertAdjacentHTML("beforeend", centralContainerSquareElement);
        const centralContainerSquare = document.querySelector("#centralContainerSquare");
    } 

    // update position and size of main container square
    centralContainerSquare.style.width = "".concat(centralContainerSquareWidth,"px");
    centralContainerSquare.style.height = "".concat(centralContainerSquareWidth,"px");
    centralContainerSquare.style.left = "".concat((centralContainerXOffset * 2), "px");
    centralContainerSquare.style.top = "".concat(centralContainerYOffset, "px");

    ////////////////////////////////////////
    // Pattern One
    // Pattern 1 - central square

    

    patternOneBigSquareWidth = centralContainerSquareWidth / 1.5
    patternOneBigSquareXYOffset = centralContainerSquareWidth / 6

    if (document.querySelector("#patternOneBigSquare") == null) {
        const patternOneBigSquareElement = `<div id="patternOneBigSquare" class="outline" style="position: absolute;"></div>`;
        centralContainerSquare.insertAdjacentHTML("beforeend", patternOneBigSquareElement);
        const patternOneBigSquare = document.querySelector("#centralContainerSquare")
    }

    // update position and size 
    patternOneBigSquare.style.width = "".concat(patternOneBigSquareWidth,"px");
    patternOneBigSquare.style.height = "".concat(patternOneBigSquareWidth,"px");
    patternOneBigSquare.style.left = "".concat((patternOneBigSquareXYOffset * 2), "px");
    patternOneBigSquare.style.top = "".concat(patternOneBigSquareXYOffset, "px");

    // Pattern 1 - periphery squares
    patternOnePeripherySquareWidth = centralContainerSquareWidth / 6


    // PeripherySquare: width, left, top, n
    class PeripherySquare {
        constructor(width, left, top, n) {
            this.width = width + "px"
            this.height = width + "px"
            this.leftOffset = left
            this.topOffset = top
            this.element = `<div id="patternOnePeripherySquare-${n}" class="outline" style="position: absolute;"></div>`
            this.elementSelector = `#patternOnePeripherySquare-${n}`
        }
    }

    //
    const patternOnePeripherySquareXOffset = []
    const patternOnePeripherySquareYOffset = []
    peripherySquares = []
    // Generate left side containers
    for (let i = 0; i < 3; i++) {
        patternOnePeripherySquareXOffset[i] = Math.random() * patternOnePeripherySquareWidth
        patternOnePeripherySquareYOffset[i] = Math.random() * patternOnePeripherySquareWidth

        // PeripherySquare: width, left, top, n
        peripherySquares[i] = new PeripherySquare(patternOnePeripherySquareWidth, patternOnePeripherySquareXOffset[i], patternOnePeripherySquareYOffset[i], i)
        centralContainerSquare.insertAdjacentHTML("beforeend", peripherySquares[i].element);
        // set
        document.querySelector(peripherySquares[i].elementSelector).style.width = peripherySquares[i].width
        document.querySelector(peripherySquares[i].elementSelector).style.height = peripherySquares[i].width
        // set + update
        document.querySelector(peripherySquares[i].elementSelector).style.left = peripherySquares[i].leftOffset  + "px"
        document.querySelector(peripherySquares[i].elementSelector).style.top = ((patternOnePeripherySquareWidth * (i * 2)) + peripherySquares[i].topOffset)  + "px"
    }

    // Generate top side containers
    topSidePeripherySquares = []
    patternOneTopSidePeripherySquareXOffset = []
    for (let i = 0; i < 2; i++) {
        patternOneTopSidePeripherySquareXOffset[i] = Math.random() * patternOnePeripherySquareWidth
        topSidePeripherySquares[i] = new PeripherySquare(patternOnePeripherySquareWidth, patternOneTopSidePeripherySquareXOffset[i], i, (3 + i))
        centralContainerSquare.insertAdjacentHTML("beforeend", topSidePeripherySquares[i].element);
        // set
        document.querySelector(topSidePeripherySquares[i].elementSelector).style.width = topSidePeripherySquares[i].width
        document.querySelector(topSidePeripherySquares[i].elementSelector).style.height = topSidePeripherySquares[i].width
        // set + update
        document.querySelector(topSidePeripherySquares[i].elementSelector).style.left = topSidePeripherySquares[i].leftOffset + (patternOnePeripherySquareWidth * ((i + 1) * 2))  + "px"
    }
    
    // Generate bottom side containers
    bottomSidePeripherySquares = []
    patternOneBottomSidePeripherySquareXOffset = []
    for (let i = 0; i < 2; i++) {
        patternOneBottomSidePeripherySquareXOffset[i] = Math.random() * patternOnePeripherySquareWidth
        bottomSidePeripherySquares[i] = new PeripherySquare(patternOnePeripherySquareWidth, patternOneBottomSidePeripherySquareXOffset[i], i, (5 + i))
        centralContainerSquare.insertAdjacentHTML("beforeend", bottomSidePeripherySquares[i].element);
        // set
        document.querySelector(bottomSidePeripherySquares[i].elementSelector).style.width = bottomSidePeripherySquares[i].width
        document.querySelector(bottomSidePeripherySquares[i].elementSelector).style.height = bottomSidePeripherySquares[i].width
        // set + update
        document.querySelector(bottomSidePeripherySquares[i].elementSelector).style.left = bottomSidePeripherySquares[i].leftOffset + (patternOnePeripherySquareWidth * ((i + 1) * 2))  + "px"
        document.querySelector(bottomSidePeripherySquares[i].elementSelector).style.top = bottomSidePeripherySquares[i].topOffset + (patternOnePeripherySquareWidth * 5)  + "px"
    }

    

}

function updateLayout() {

}

window.addEventListener( 'load', setLayout );
window.addEventListener( 'resize', updateLayout );
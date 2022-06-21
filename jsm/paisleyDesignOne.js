import { paisleyElementFlower } from '/jsm/paisleyBlocks/paisleyElementFlower.js'
import { paisleyElementDropOne } from '/jsm/paisleyBlocks/paisleyElementMSizeDrop01.js'
import { paisleyElementDropTwo } from '/jsm/paisleyBlocks/paisleyElementMSizeDrop02.js'
import { paisleyElementGroupOne } from '/jsm/paisleyBlocks/paisleyElementGroupOne.js'

export { pDOneSetLayout }
export { pDOneUpdateLayout }

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

const body = document.querySelector("body");

let bodyWidth = body.clientWidth;
let bodyHeight = body.clientHeight;
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;
let centralContainerSquareWidth, centralContainerXOffset, centralContainerYOffset;
const patternOnePeripherySquareXOffset = []
const patternOnePeripherySquareYOffset = []
const peripherySquares = []

let patternOnePeripherySquareWidth;

const topSidePeripherySquares = []
const patternOneTopSidePeripherySquareXOffset = []

const bottomSidePeripherySquares = []
const patternOneBottomSidePeripherySquareXOffset = []

let patternOneBigSquareWidth;
let patternOneBigSquareXYOffset;

function pDOneSetLayout() {
    // Get screen size

    bodyWidth = body.clientWidth;
    bodyHeight = body.clientHeight;
    screenWidth = window.innerWidth;
	screenHeight = window.innerHeight;

    //Set layout of UI Column, bottom/side creator link, and 2 content squares

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
        const patternOneBigSquare = document.querySelector("#patternOneBigSquare")
        patternOneBigSquare.insertAdjacentHTML("beforeend", paisleyElementGroupOne)
    }

    // update position and size 
    patternOneBigSquare.style.width = "".concat(patternOneBigSquareWidth,"px");
    patternOneBigSquare.style.height = "".concat(patternOneBigSquareWidth,"px");
    patternOneBigSquare.style.left = "".concat((patternOneBigSquareXYOffset * 2), "px");
    patternOneBigSquare.style.top = "".concat(patternOneBigSquareXYOffset, "px");

    // Pattern 1 - periphery squares
    patternOnePeripherySquareWidth = centralContainerSquareWidth / 6


    // PeripherySquare: width, left, top, n
    


    // Generate left side containers
    for (let i = 0; i < 3; i++) {
        patternOnePeripherySquareXOffset[i] = Math.random() 
        patternOnePeripherySquareYOffset[i] = Math.random()

        // PeripherySquare: width, left, top, n
        peripherySquares[i] = new PeripherySquare(patternOnePeripherySquareWidth, (patternOnePeripherySquareXOffset[i] * patternOnePeripherySquareWidth), (patternOnePeripherySquareYOffset[i] * patternOnePeripherySquareWidth), i)
        centralContainerSquare.insertAdjacentHTML("beforeend", peripherySquares[i].element);
        
        // set
        document.querySelector(peripherySquares[i].elementSelector).style.width = peripherySquares[i].width
        document.querySelector(peripherySquares[i].elementSelector).style.height = peripherySquares[i].width
        // set + update
        document.querySelector(peripherySquares[i].elementSelector).style.left = peripherySquares[i].leftOffset  + "px"
        document.querySelector(peripherySquares[i].elementSelector).style.top = ((patternOnePeripherySquareWidth * (i * 2)) + peripherySquares[i].topOffset)  + "px"
    }

    document.querySelector(peripherySquares[0].elementSelector).insertAdjacentHTML("beforeend", paisleyElementDropOne)
    document.querySelector(peripherySquares[1].elementSelector).insertAdjacentHTML("beforeend", paisleyElementDropTwo)
    document.querySelector(peripherySquares[2].elementSelector).insertAdjacentHTML("beforeend", paisleyElementFlower)

    // Generate top side containers
    for (let i = 0; i < 2; i++) {
        patternOneTopSidePeripherySquareXOffset[i] = Math.random()
        // PeripherySquare: width, left, top, n
        topSidePeripherySquares[i] = new PeripherySquare(patternOnePeripherySquareWidth, (patternOneTopSidePeripherySquareXOffset[i] * patternOnePeripherySquareWidth), i, (3 + i))
        centralContainerSquare.insertAdjacentHTML("beforeend", topSidePeripherySquares[i].element);
        // set
        document.querySelector(topSidePeripherySquares[i].elementSelector).style.width = topSidePeripherySquares[i].width
        document.querySelector(topSidePeripherySquares[i].elementSelector).style.height = topSidePeripherySquares[i].width
        // set + update
        document.querySelector(topSidePeripherySquares[i].elementSelector).style.left = topSidePeripherySquares[i].leftOffset + (patternOnePeripherySquareWidth * ((i + 1) * 2))  + "px"
    }
    
    // Generate bottom side containers
    for (let i = 0; i < 2; i++) {
        patternOneBottomSidePeripherySquareXOffset[i] = Math.random() 
        // PeripherySquare: width, left, top, n
        bottomSidePeripherySquares[i] = new PeripherySquare(patternOnePeripherySquareWidth, (patternOneBottomSidePeripherySquareXOffset[i] * patternOnePeripherySquareWidth), i, (5 + i))
        centralContainerSquare.insertAdjacentHTML("beforeend", bottomSidePeripherySquares[i].element);
        // set
        document.querySelector(bottomSidePeripherySquares[i].elementSelector).style.width = bottomSidePeripherySquares[i].width
        document.querySelector(bottomSidePeripherySquares[i].elementSelector).style.height = bottomSidePeripherySquares[i].width
        // set + update
        document.querySelector(bottomSidePeripherySquares[i].elementSelector).style.left = bottomSidePeripherySquares[i].leftOffset + (patternOnePeripherySquareWidth * ((i + 1) * 2))  + "px"
        document.querySelector(bottomSidePeripherySquares[i].elementSelector).style.top = bottomSidePeripherySquares[i].topOffset + (patternOnePeripherySquareWidth * 5)  + "px"
    }

    
}

function pDOneUpdateLayout() {
    bodyWidth = body.clientWidth;
    bodyHeight = body.clientHeight;
    screenWidth = window.innerWidth;
	screenHeight = window.innerHeight;

    //Set layout of UI Column, bottom/side creator link, and 2 content squares

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


    // update position and size 
    patternOneBigSquare.style.width = "".concat(patternOneBigSquareWidth,"px");
    patternOneBigSquare.style.height = "".concat(patternOneBigSquareWidth,"px");
    patternOneBigSquare.style.left = "".concat((patternOneBigSquareXYOffset * 2), "px");
    patternOneBigSquare.style.top = "".concat(patternOneBigSquareXYOffset, "px");

    // Pattern 1 - periphery squares
    patternOnePeripherySquareWidth = centralContainerSquareWidth / 6


    for (let i = 0; i < 3; i++) {
        
        centralContainerSquare.insertAdjacentHTML("beforeend", peripherySquares[i].element);
        
        // set + update
        //console.log(peripherySquares[i].width);
        peripherySquares[i].width = patternOnePeripherySquareWidth + "px"
        peripherySquares[i].height = patternOnePeripherySquareWidth  + "px"
        peripherySquares[i].leftOffset = patternOnePeripherySquareXOffset[i] * patternOnePeripherySquareWidth
        peripherySquares[i].topOffset = patternOnePeripherySquareXOffset[i] * patternOnePeripherySquareWidth
        console.log(patternOnePeripherySquareWidth);
        document.querySelector(peripherySquares[i].elementSelector).style.width = peripherySquares[i].width
        document.querySelector(peripherySquares[i].elementSelector).style.height = peripherySquares[i].width
        document.querySelector(peripherySquares[i].elementSelector).style.left = peripherySquares[i].leftOffset  + "px"
        document.querySelector(peripherySquares[i].elementSelector).style.top = ((patternOnePeripherySquareWidth * (i * 2)) + peripherySquares[i].topOffset)  + "px"
    }

    // Top side periphery squares
    for (let i = 0; i < 2; i++) {
        topSidePeripherySquares[i].width = patternOnePeripherySquareWidth + "px"
        topSidePeripherySquares[i].height = patternOnePeripherySquareWidth + "px"
        topSidePeripherySquares[i].leftOffset = (patternOneTopSidePeripherySquareXOffset[i] * patternOnePeripherySquareWidth)
        // set + update
        document.querySelector(topSidePeripherySquares[i].elementSelector).style.width = topSidePeripherySquares[i].width
        document.querySelector(topSidePeripherySquares[i].elementSelector).style.height = topSidePeripherySquares[i].width
        document.querySelector(topSidePeripherySquares[i].elementSelector).style.left = topSidePeripherySquares[i].leftOffset + (patternOnePeripherySquareWidth * ((i + 1) * 2))  + "px"
    }
    
    // Bottom side periphery squares
    for (let i = 0; i < 2; i++) {
        bottomSidePeripherySquares[i].width = patternOnePeripherySquareWidth + "px"
        bottomSidePeripherySquares[i].height = patternOnePeripherySquareWidth + "px"
        bottomSidePeripherySquares[i].leftOffset = (patternOneBottomSidePeripherySquareXOffset[i] * patternOnePeripherySquareWidth)
        // set + update
        document.querySelector(bottomSidePeripherySquares[i].elementSelector).style.width = patternOnePeripherySquareWidth + "px"
        document.querySelector(bottomSidePeripherySquares[i].elementSelector).style.height = patternOnePeripherySquareWidth + "px"
        document.querySelector(bottomSidePeripherySquares[i].elementSelector).style.left = bottomSidePeripherySquares[i].leftOffset + (patternOnePeripherySquareWidth * ((i + 1) * 2))  + "px"
        document.querySelector(bottomSidePeripherySquares[i].elementSelector).style.top = bottomSidePeripherySquares[i].topOffset + (patternOnePeripherySquareWidth * 5)  + "px"
    }
}
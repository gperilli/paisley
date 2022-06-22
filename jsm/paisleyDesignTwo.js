
import { screenSize } from '/jsm/pD2ScreenSize.js'
import { portraitLandscapeParams } from '/jsm/pD2PortraitLandscapeParams.js'

import { LSizePaisleyBlock } from '/jsm/pD2LSizePaisleyBlock.js'
import { mainSquarePositioning } from '/jsm/pD2LSizePaisleyBlock.js'

import { MSizePaisleyBlock } from '/jsm/pD2MSizePaisleyBlock.js'
import { topLeftPeripherySquarePositioning } from '/jsm/pD2MSizePaisleyBlock.js'
import { bottomLeftPeripherySquarePositioning } from '/jsm/pD2MSizePaisleyBlock.js'

import { SSizePaisleyBlock } from '/jsm/pD2SSizePaisleyBlock.js'
import { topSidePeripherySquarePositioning } from '/jsm/pD2SSizePaisleyBlock.js'
import { bottomSidePeripherySquarePositioning } from '/jsm/pD2SSizePaisleyBlock.js'

export { pDTwoSetLayout }
export { pDTwoUpdateLayout }
export { body }

const body = document.querySelector("body");
let centralContainerParams

let sSizePaisleyBlockParams;
let mSizePaisleyBlockParams;
let lSizePaisleyBlockParams;

// Main Square
let mainSquare;

// M SIze Squares
let topLeftPeripherySquare;
let bottomLeftPeripherySquare;

// S Size Squares
let topSidePeripherySquare;
let bottomSidePeripherySquare;

let centralContainerSquareWidth, centralContainerXOffset, centralContainerYOffset;
let topSidePeripherySquarePosition
let bottomSidePeripherySquarePosition

let mainSquareWidth;
let mainSquareXYOffset;

let patternTwoMSizePeripherySquareWidth;
let patternTwoSSizePeripherySquareWidth;

function centralContainerSquarePositioning(centralContainerSquare, centralContainerSquareWidth, centralContainerXOffset, centralContainerYOffset) {
    centralContainerSquare.style.width = centralContainerSquareWidth + "px";
    centralContainerSquare.style.height = centralContainerSquareWidth + "px";
    centralContainerSquare.style.left = "".concat((centralContainerXOffset * 2), "px");
    centralContainerSquare.style.top = "".concat(centralContainerYOffset, "px");
}


function randomIntToFour() {
    return Math.floor(Math.random() * 4)
}

function positionSwitcher(topSidePeripherySquarePosition) {
    switch(topSidePeripherySquarePosition) {
        case 0:
            bottomSidePeripherySquarePosition = 2
        break;
        case 1:
            bottomSidePeripherySquarePosition = 3
        break;
        case 2:
            bottomSidePeripherySquarePosition = 0
        break;
        case 3:
            bottomSidePeripherySquarePosition = 1
        break;
    }
}

function pDTwoSetLayout() {
    // Get screen size
    let screenDimensions = screenSize()
    let screenWidth = screenDimensions[0]
    let screenHeight = screenDimensions[1]
    
    // Central container
    centralContainerParams = portraitLandscapeParams(screenWidth > screenHeight, screenWidth, screenHeight)
    centralContainerXOffset = centralContainerParams[1]
    centralContainerYOffset = centralContainerParams[2]
    centralContainerSquareWidth = centralContainerParams[0]
    
    // Only insert element first time
    if (document.querySelector("#centralContainerSquare") == null) {
        const centralContainerSquareElement = `<div id="centralContainerSquare" class="outline" style="position: absolute;"></div>`;
        body.insertAdjacentHTML("beforeend", centralContainerSquareElement);
        const centralContainerSquare = document.querySelector("#centralContainerSquare");
    } 

    // update position and size of main container square
    centralContainerSquarePositioning(centralContainerSquare, centralContainerSquareWidth, centralContainerXOffset, centralContainerYOffset);
    let centralContainerRotation = randomIntToFour()
    centralContainerSquare.style.transform = `rotate(${centralContainerRotation * 90}deg)`;

    // Main Square
    mainSquareWidth = centralContainerSquareWidth / 1.5
    mainSquareXYOffset = centralContainerSquareWidth / 6
    // Smaller Squares
    patternTwoMSizePeripherySquareWidth = centralContainerSquareWidth / 3
    patternTwoSSizePeripherySquareWidth = centralContainerSquareWidth / 6


    lSizePaisleyBlockParams = {
        width: mainSquareWidth,
        leftOffset: (mainSquareXYOffset * 2),
        topOffset: mainSquareXYOffset,
        rotation: randomIntToFour(),
    }

    // MainSquare: width, left, top, rotation, n
    mainSquare = new LSizePaisleyBlock(lSizePaisleyBlockParams)
    centralContainerSquare.insertAdjacentHTML("beforeend", mainSquare.element);
    // Set position and size
    mainSquarePositioning(mainSquare);
    document.querySelector(mainSquare.elementSelector).style.transform = `rotate(${mainSquare.rotation * 90}deg)`;
    document.querySelector(mainSquare.elementSelector).insertAdjacentHTML("beforeend", mainSquare.paisleyVector)


    // Top left square
    mSizePaisleyBlockParams = {
        width: patternTwoMSizePeripherySquareWidth,
        leftOffset: 0,
        topOffset: 0,
        rotation: randomIntToFour(),
    }

    topLeftPeripherySquare = new MSizePaisleyBlock(mSizePaisleyBlockParams)
    centralContainerSquare.insertAdjacentHTML("beforeend", topLeftPeripherySquare.element);
    // Set size and position
    topLeftPeripherySquarePositioning(topLeftPeripherySquare);
    document.querySelector(topLeftPeripherySquare.elementSelector).style.transform = `rotate(${topLeftPeripherySquare.rotation * 90}deg)`;
    document.querySelector(topLeftPeripherySquare.elementSelector).insertAdjacentHTML("beforeend", topLeftPeripherySquare.paisleyVector)

    // Bottom left square
    mSizePaisleyBlockParams = {
        width: patternTwoMSizePeripherySquareWidth,
        leftOffset: 0,
        topOffset: patternTwoMSizePeripherySquareWidth,
        rotation: randomIntToFour(),
    }

    bottomLeftPeripherySquare = new MSizePaisleyBlock(mSizePaisleyBlockParams)
    centralContainerSquare.insertAdjacentHTML("beforeend", bottomLeftPeripherySquare.element);
    
    // Set size and position
    bottomLeftPeripherySquarePositioning(bottomLeftPeripherySquare);
    document.querySelector(bottomLeftPeripherySquare.elementSelector).style.transform = `rotate(${bottomLeftPeripherySquare.rotation * 90}deg)`;
    document.querySelector(bottomLeftPeripherySquare.elementSelector).insertAdjacentHTML("beforeend", bottomLeftPeripherySquare.paisleyVector)


    // Top Side S Size square 1
    topSidePeripherySquarePosition = randomIntToFour()
    let topSidePeripherySquareRotation = randomIntToFour()
    // PeripherySquare: width, left, top, position, rotation n
    //let paisleyBlocksSSizeBlock1 =  new PaisleyBlocksSSizeBlock1("classname")
    sSizePaisleyBlockParams = {
        width: patternTwoSSizePeripherySquareWidth,
        leftOffset: patternTwoMSizePeripherySquareWidth + (patternTwoSSizePeripherySquareWidth * topSidePeripherySquarePosition),
        topOffset: 0,
        position: topSidePeripherySquarePosition,
        rotation: topSidePeripherySquareRotation,
        n: 0
    }

    topSidePeripherySquare = new SSizePaisleyBlock(sSizePaisleyBlockParams)
    centralContainerSquare.insertAdjacentHTML("beforeend", topSidePeripherySquare.element);
    // Set size and position
    topSidePeripherySquarePositioning(topSidePeripherySquare);
    document.querySelector(topSidePeripherySquare.elementSelector).style.transform = `rotate(${topSidePeripherySquare.rotation * 90}deg)`;
    document.querySelector(topSidePeripherySquare.elementSelector).insertAdjacentHTML("beforeend", topSidePeripherySquare.paisleyVector)

    // Bottom Side S Size square 2
    positionSwitcher(topSidePeripherySquarePosition);
    
    //let paisleyBlocksSSizeBlock2 =  new PaisleyBlocksSSizeBlock1("classname")
    sSizePaisleyBlockParams = {
        width: patternTwoSSizePeripherySquareWidth,
        leftOffset: patternTwoMSizePeripherySquareWidth + (patternTwoSSizePeripherySquareWidth * bottomSidePeripherySquarePosition),
        topOffset: (patternTwoSSizePeripherySquareWidth * 5), bottomSidePeripherySquarePosition,
        position: bottomSidePeripherySquarePosition, 
        rotation: 0,
        //n: 1
    }
    // PeripherySquare: width, left, top, position, rotation, n
    bottomSidePeripherySquare = new SSizePaisleyBlock(sSizePaisleyBlockParams)
    console.log(bottomSidePeripherySquare.instanceN)
    centralContainerSquare.insertAdjacentHTML("beforeend", bottomSidePeripherySquare.element);
    // Set size and position
    bottomSidePeripherySquarePositioning(bottomSidePeripherySquare);
    document.querySelector(bottomSidePeripherySquare.elementSelector).style.transform = `rotate(${topSidePeripherySquare.rotation * 90}deg)`;
    document.querySelector(bottomSidePeripherySquare.elementSelector).insertAdjacentHTML("beforeend", bottomSidePeripherySquare.paisleyVector)

    
}

function pDTwoUpdateLayout() {
    
    // get screen size
    let screenDimensions = screenSize()
    let screenWidth = screenDimensions[0]
    let screenHeight = screenDimensions[1]

    // Central container
    centralContainerParams = portraitLandscapeParams(screenWidth > screenHeight, screenWidth, screenHeight)
    centralContainerXOffset = centralContainerParams[1]
    centralContainerYOffset = centralContainerParams[2]
    centralContainerSquareWidth = centralContainerParams[0]
    centralContainerSquarePositioning(centralContainerSquare, centralContainerSquareWidth, centralContainerXOffset, centralContainerYOffset);
    
    // Main square sizing
    mainSquareWidth = centralContainerSquareWidth / 1.5
    mainSquareXYOffset = centralContainerSquareWidth / 6
    // Smaller square sizing
    patternTwoMSizePeripherySquareWidth = centralContainerSquareWidth / 3
    patternTwoSSizePeripherySquareWidth = centralContainerSquareWidth / 6

    // main square
    mainSquare.width = mainSquareWidth
    mainSquare.height = mainSquareWidth
    mainSquare.leftOffset = (mainSquareXYOffset * 2)
    mainSquare.topOffset = mainSquareXYOffset
    // update position and size     
    mainSquarePositioning(mainSquare);

    
    // Top Left M Size Square
    topLeftPeripherySquare.width = patternTwoMSizePeripherySquareWidth
    topLeftPeripherySquare.height = patternTwoMSizePeripherySquareWidth
    topLeftPeripherySquare.leftOffset = 0
    topLeftPeripherySquare.topOffset = 0
    // update position and size 
    topLeftPeripherySquarePositioning(topLeftPeripherySquare);
    
    // Bottom Left M Size Square
    bottomLeftPeripherySquare.width = patternTwoMSizePeripherySquareWidth
    bottomLeftPeripherySquare.height = patternTwoMSizePeripherySquareWidth
    bottomLeftPeripherySquare.leftOffset = 0
    bottomLeftPeripherySquare.topOffset = patternTwoMSizePeripherySquareWidth
    // update position and size 
    bottomLeftPeripherySquarePositioning(bottomLeftPeripherySquare);
    
    // Top side S Size Square
    topSidePeripherySquare.width = patternTwoSSizePeripherySquareWidth
    topSidePeripherySquare.height = patternTwoSSizePeripherySquareWidth
    topSidePeripherySquare.leftOffset = patternTwoMSizePeripherySquareWidth + (patternTwoSSizePeripherySquareWidth * topSidePeripherySquare.position)
    topSidePeripherySquare.topOffset = 0
    // update position and size 
    topSidePeripherySquarePositioning(topSidePeripherySquare);

    // Bottom side S Size Square
    positionSwitcher(topSidePeripherySquarePosition);
     
    // Bottom side S Size Square
    bottomSidePeripherySquare.width = patternTwoSSizePeripherySquareWidth
    bottomSidePeripherySquare.height = patternTwoSSizePeripherySquareWidth
    bottomSidePeripherySquare.leftOffset = patternTwoMSizePeripherySquareWidth + (patternTwoSSizePeripherySquareWidth * bottomSidePeripherySquare.position)
    bottomSidePeripherySquare.topOffset = (patternTwoSSizePeripherySquareWidth * 5)
    // update position and size 
    bottomSidePeripherySquarePositioning(bottomSidePeripherySquare);

}

import { screenSize } from '/jsm/pD2ScreenSize.js'
import { portraitLandscapeParams } from '/jsm/pD2PortraitLandscapeParams.js'

import { LSizePaisleyBlock } from '/jsm/pD2PaisleyBlock_LSize.js'
import { mainSquarePositioning } from '/jsm/pD2PaisleyBlock_LSize.js'

import { MSizePaisleyBlock } from '/jsm/pD2PaisleyBlock_MSize.js'
import { topLeftPeripherySquarePositioning } from '/jsm/pD2PaisleyBlock_MSize.js'
import { bottomLeftPeripherySquarePositioning } from '/jsm/pD2PaisleyBlock_MSize.js'

import { SSizePaisleyBlock } from '/jsm/pD2PaisleyBlock_SSize.js'
import { topSidePeripherySquarePositioning } from '/jsm/pD2PaisleyBlock_SSize.js'
import { bottomSidePeripherySquarePositioning } from '/jsm/pD2PaisleyBlock_SSize.js'

export { pDThreeSetLayout }
export { pDThreeUpdateLayout }
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


function pDThreeSetLayout() {
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
    mainSquareWidth = centralContainerSquareWidth
    mainSquareXYOffset = 0
    // Smaller Squares
    



    

    lSizePaisleyBlockParams = {
        width: mainSquareWidth,
        leftOffset: (mainSquareXYOffset * 2),
        topOffset: mainSquareXYOffset,
        rotation: randomIntToFour(),
        fadein: true,
    }

    // MainSquare: width, left, top, rotation, n
    mainSquare = new LSizePaisleyBlock(lSizePaisleyBlockParams)
    centralContainerSquare.insertAdjacentHTML("beforeend", mainSquare.element);
    // Set position and size
    mainSquarePositioning(mainSquare);
    document.querySelector(mainSquare.elementSelector).style.transform = `rotate(${mainSquare.rotation * 90}deg)`;
    
    document.querySelector(mainSquare.elementSelector).insertAdjacentHTML("beforeend", mainSquare.paisleyVector)

    console.log(document.getElementsByClassName(mainSquare.paisleyVectorClassNames).length)
    //console.log(document.getElementsByClassName(mainSquare.paisleyVectorClassNames))

    document.getElementsByClassName(`${mainSquare.paisleyVectorClassNames}`)
    //console.log(document.getElementsByClassName(mainSquare.paisleyVectorClassNames)[0])

    // Adjusting opacity here
    document.getElementsByClassName(mainSquare.paisleyVectorClassNames)[0].style.opacity = 0.1;


    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }
      
      function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }
      
      //alert(rgbToHex(0, 51, 255)); // #0033ff

    const paisleyElements = document.getElementsByClassName(mainSquare.paisleyVectorClassNames)
    paisleyElements[0].style.fill = rgbToHex(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255));
    
    for (let i = 0; i < paisleyElements.length; i++) {

        paisleyElements[i].style.fill = rgbToHex(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255));
    }
    
    
    
   
}

function pDThreeUpdateLayout() {
    
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
    mainSquareWidth = centralContainerSquareWidth
    mainSquareXYOffset = 0
    // Smaller square sizing

    // main square
    mainSquare.width = mainSquareWidth
    mainSquare.height = mainSquareWidth
    mainSquare.leftOffset = (mainSquareXYOffset * 2)
    mainSquare.topOffset = mainSquareXYOffset
    // update position and size     
    mainSquarePositioning(mainSquare);
    

}
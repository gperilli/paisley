
import { screenSize } from '/jsm/pD2ScreenSize.js'
import { portraitLandscapeParams } from '/jsm/pD2PortraitLandscapeParams.js'

import { Utils } from '/jsm/utils/utils.js'
export { paisleyUtils }

import { LSizePaisleyBlock } from '/jsm/pD2PaisleyBlock_LSize.js'
import { mainSquarePositioning } from '/jsm/pD2PaisleyBlock_LSize.js'

import { Menu } from '/jsm/menu.js' 


export { pDThreeSetLayout }
export { pDThreeUpdateLayout }
export { body }
export { paisleySettings }

const body = document.querySelector("body");
let centralContainerParams

const paisleyUtils = new Utils

let paisleySettings;

let lSizePaisleyBlockParams;

// Main Square
let mainSquare;



let centralContainerSquareWidth, centralContainerXOffset, centralContainerYOffset;


let mainSquareWidth;
let mainSquareXYOffset;


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

    /////////////////////////////////////////////////////
    // layout based on screen size
    /////////////////////////////////////////////////////
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
    


    /////////////////////////////////////////////////////
    // localStorage Retrieval
    /////////////////////////////////////////////////////
    localStorage.setItem("paisleySettings-reset", "false")
    console.log(localStorage.getItem("paisleySettings"))
    console.log(localStorage.getItem("paisleySettings-reset"))
    if (localStorage.getItem("paisleySettings") == null || localStorage.getItem("paisleySettings-reset") == "true") {
        // load default paisley Settings
        localStorage.setItem("paisleySettings", JSON.stringify({ coloring: "colors", fadeIn: "appearOnLoad", opacity: "static"}))
    } 
    // retrueve paisley Settings
    paisleySettings = JSON.parse(localStorage.getItem("paisleySettings"))


    /////////////////////////////////////////////
    // the paisley wallpaper
    ////////////////////////////////////////////
    lSizePaisleyBlockParams = {
        width: mainSquareWidth,
        leftOffset: (mainSquareXYOffset * 2),
        topOffset: mainSquareXYOffset,
        rotation: randomIntToFour(),
        fadeIn: paisleySettings.fadeIn,
        coloring: paisleySettings.coloring, // "colors" / "greys" / "colors"
        
    }

    // MainSquare: width, left, top, rotation, n
    mainSquare = new LSizePaisleyBlock(lSizePaisleyBlockParams)
    centralContainerSquare.insertAdjacentHTML("beforeend", mainSquare.element);
    // Set position and size
    mainSquarePositioning(mainSquare);
    document.querySelector(mainSquare.elementSelector).style.transform = `rotate(${mainSquare.rotation * 90}deg)`;
    document.querySelector(mainSquare.elementSelector).insertAdjacentHTML("beforeend", mainSquare.paisleyVector)

    /////////////////////////////////////////////
    // the options menu 
    ////////////////////////////////////////////
    const menuParams = {
        fadeIn: paisleySettings.fadeIn, // "fadeIn" / "randomElement" / "appearOnLoad"
        coloring: paisleySettings.coloring, // "colors" / "greys" / "colors"
        opacity: paisleySettings.opacity // "static" / "oscillating"
    }
    const paisleyMenu = new Menu(menuParams)
    

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
import { paisleyElementFlower } from '/jsm/paisleyElementFlower.js'
import { paisleyElementSDropTwo } from '/jsm/paisleyElementSDropTwo.js'
import { paisleyElementDropOne } from '/jsm/paisleyElementMSizeDrop01.js'
import { paisleyElementDropTwo } from '/jsm/paisleyElementMSizeDrop02.js'

import { paisleyElementGroupOne } from '/jsm/paisleyElementGroupOne.js'

export { pDTwoSetLayout }
export { pDTwoUpdateLayout }

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

let mainSquare;

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

let topLeftPeripherySquare;
let bottomLeftPeripherySquare;

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

let topSidePeripherySquareOne;
let topSidePeripherySquareTwo;

const body = document.querySelector("body");

let bodyWidth = body.clientWidth;
let bodyHeight = body.clientHeight;
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;
let centralContainerSquareWidth, centralContainerXOffset, centralContainerYOffset;
let topSidePeripherySquareOnePosition
let topSidePeripherySquareTwoPosition

let patternTwoBigSquareWidth;
let patternTwoBigSquareXYOffset;

let patternTwoMSizePeripherySquareWidth;
let patternTwoSSizePeripherySquareWidth;

function pDTwoSetLayout() {
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
    let centralContainerRotation = Math.floor(Math.random() * 4)
    centralContainerSquare.style.transform = `rotate(${centralContainerRotation * 90}deg)`;

    ////////////////////////////////////////
    // Pattern One
    // Pattern 1 - central square
    patternTwoBigSquareWidth = centralContainerSquareWidth / 1.5
    patternTwoBigSquareXYOffset = centralContainerSquareWidth / 6


    let mainSquareRotation = Math.floor(Math.random() * 4)
    // MainSquare: width, left, top, rotation, n
    mainSquare = new LSizeMainSquare(patternTwoBigSquareWidth, (patternTwoBigSquareXYOffset * 2), patternTwoBigSquareXYOffset, mainSquareRotation, 0)
    centralContainerSquare.insertAdjacentHTML("beforeend", mainSquare.element);

    // update position and size
    document.querySelector(mainSquare.elementSelector).style.width = mainSquare.width + "px";
    document.querySelector(mainSquare.elementSelector).style.height = mainSquare.width + "px";
    document.querySelector(mainSquare.elementSelector).style.left = mainSquare.leftOffset + "px";
    document.querySelector(mainSquare.elementSelector).style.top = mainSquare.topOffset + "px";
    document.querySelector(mainSquare.elementSelector).style.transform = `rotate(${mainSquare.rotation * 90}deg)`;
    document.querySelector(mainSquare.elementSelector).insertAdjacentHTML("beforeend", paisleyElementGroupOne)

    /////////////////////////////////
    patternTwoMSizePeripherySquareWidth = centralContainerSquareWidth / 3
    patternTwoSSizePeripherySquareWidth = centralContainerSquareWidth / 6

    // Top left square
    // PeripherySquare: width, left, top, rotation, n
    let topLeftPeripherySquareRotation = Math.floor(Math.random() * 4)
    topLeftPeripherySquare = new MSizePeripherySquare(patternTwoMSizePeripherySquareWidth, 0, 0, topLeftPeripherySquareRotation, 0)
    centralContainerSquare.insertAdjacentHTML("beforeend", topLeftPeripherySquare.element);
    // set
    document.querySelector(topLeftPeripherySquare.elementSelector).style.width = topLeftPeripherySquare.width + "px"
    document.querySelector(topLeftPeripherySquare.elementSelector).style.height = topLeftPeripherySquare.width + "px"
    // set + update
    document.querySelector(topLeftPeripherySquare.elementSelector).style.left = topLeftPeripherySquare.leftOffset + "px"
    document.querySelector(topLeftPeripherySquare.elementSelector).style.top = topLeftPeripherySquare.toptOffset + "px"
    document.querySelector(topLeftPeripherySquare.elementSelector).style.transform = `rotate(${topLeftPeripherySquare.rotation * 90}deg)`;
    document.querySelector(topLeftPeripherySquare.elementSelector).insertAdjacentHTML("beforeend", paisleyElementDropOne)

    // Bottom left square
    // PeripherySquare: width, left, top, n
    let bottomLeftPeripherySquareRotation = Math.floor(Math.random() * 4)
    bottomLeftPeripherySquare = new MSizePeripherySquare(patternTwoMSizePeripherySquareWidth, 0, patternTwoMSizePeripherySquareWidth, bottomLeftPeripherySquareRotation, 1)
    centralContainerSquare.insertAdjacentHTML("beforeend", bottomLeftPeripherySquare.element);
    // set
    document.querySelector(bottomLeftPeripherySquare.elementSelector).style.width = bottomLeftPeripherySquare.width + "px"
    document.querySelector(bottomLeftPeripherySquare.elementSelector).style.height = bottomLeftPeripherySquare.width + "px"
    // set + update
    document.querySelector(bottomLeftPeripherySquare.elementSelector).style.left = bottomLeftPeripherySquare.leftOffset + "px"
    document.querySelector(bottomLeftPeripherySquare.elementSelector).style.top = bottomLeftPeripherySquare.topOffset + "px"
    document.querySelector(bottomLeftPeripherySquare.elementSelector).style.transform = `rotate(${bottomLeftPeripherySquare.rotation * 90}deg)`;
    document.querySelector(bottomLeftPeripherySquare.elementSelector).insertAdjacentHTML("beforeend", paisleyElementDropTwo)


    // Top Side S square 1
    
    
    topSidePeripherySquareOnePosition = Math.floor(Math.random() * 4)
    let topSidePeripherySquareRotation = Math.floor(Math.random() * 4)
    console.log(topSidePeripherySquareOnePosition)
    // PeripherySquare: width, left, top, position, rotation n
    topSidePeripherySquareOne = new SSizePeripherySquare(patternTwoSSizePeripherySquareWidth, patternTwoMSizePeripherySquareWidth + (patternTwoSSizePeripherySquareWidth * topSidePeripherySquareOnePosition), 0, topSidePeripherySquareOnePosition, topSidePeripherySquareRotation, 0)
    centralContainerSquare.insertAdjacentHTML("beforeend", topSidePeripherySquareOne.element);
    // set
    document.querySelector(topSidePeripherySquareOne.elementSelector).style.width = topSidePeripherySquareOne.width + "px"
    document.querySelector(topSidePeripherySquareOne.elementSelector).style.height = topSidePeripherySquareOne.width + "px"
    // set + update
    document.querySelector(topSidePeripherySquareOne.elementSelector).style.left = topSidePeripherySquareOne.leftOffset + "px"
    document.querySelector(topSidePeripherySquareOne.elementSelector).style.top = topSidePeripherySquareOne.topOffset + "px"
    document.querySelector(topSidePeripherySquareOne.elementSelector).style.transform = `rotate(${topSidePeripherySquareOne.rotation * 90}deg)`;
    document.querySelector(topSidePeripherySquareOne.elementSelector).insertAdjacentHTML("beforeend", paisleyElementSDropTwo)

    // Top Side S square 2
    
    switch(topSidePeripherySquareOnePosition) {
        case 0:
            topSidePeripherySquareTwoPosition = 2
        break;
        case 1:
            topSidePeripherySquareTwoPosition = 3
        break;
        case 2:
            topSidePeripherySquareTwoPosition = 0
        break;
        case 3:
            topSidePeripherySquareTwoPosition = 1
        break;
    }
     
    // PeripherySquare: width, left, top, position, rotation, n
    topSidePeripherySquareTwo = new SSizePeripherySquare(patternTwoSSizePeripherySquareWidth, patternTwoMSizePeripherySquareWidth + (patternTwoSSizePeripherySquareWidth * topSidePeripherySquareTwoPosition), (patternTwoSSizePeripherySquareWidth * 5), topSidePeripherySquareTwoPosition, 0, 1)
    centralContainerSquare.insertAdjacentHTML("beforeend", topSidePeripherySquareTwo.element);
    // set
    document.querySelector(topSidePeripherySquareTwo.elementSelector).style.width = topSidePeripherySquareTwo.width + "px"
    document.querySelector(topSidePeripherySquareTwo.elementSelector).style.height = topSidePeripherySquareTwo.width + "px"
    // set + update
    document.querySelector(topSidePeripherySquareTwo.elementSelector).style.left = topSidePeripherySquareTwo.leftOffset  + "px"
    document.querySelector(topSidePeripherySquareTwo.elementSelector).style.top = topSidePeripherySquareTwo.topOffset  + "px"
    document.querySelector(topSidePeripherySquareTwo.elementSelector).style.transform = `rotate(${topSidePeripherySquareOne.rotation * 90}deg)`;
    document.querySelector(topSidePeripherySquareTwo.elementSelector).insertAdjacentHTML("beforeend", paisleyElementFlower)


}

function pDTwoUpdateLayout() {
    
    // update these values
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
        //const centralContainerSquareElement = `<div id="centralContainerSquare" class="outline" style="position: absolute;"></div>`;
        //body.insertAdjacentHTML("beforeend", centralContainerSquareElement);
        //const centralContainerSquare = document.querySelector("#centralContainerSquare");
    } 

    // update position and size of main container square
    centralContainerSquare.style.width = "".concat(centralContainerSquareWidth,"px");
    centralContainerSquare.style.height = "".concat(centralContainerSquareWidth,"px");
    centralContainerSquare.style.left = "".concat((centralContainerXOffset * 2), "px");
    centralContainerSquare.style.top = "".concat(centralContainerYOffset, "px");
    //let centralContainerRotation = Math.floor(Math.random() * 4)
    //centralContainerSquare.style.transform = `rotate(${centralContainerRotation * 90}deg)`;

    ////////////////////////////////////////
    // Pattern One
    // Pattern 1 - central square
    patternTwoBigSquareWidth = centralContainerSquareWidth / 1.5
    patternTwoBigSquareXYOffset = centralContainerSquareWidth / 6


    //let mainSquareRotation = Math.floor(Math.random() * 4)
    // MainSquare: width, left, top, rotation, n
    //let mainSquare = new LSizeMainSquare(patternTwoBigSquareWidth, 0, 0, mainSquareRotation, 0)
    //centralContainerSquare.insertAdjacentHTML("beforeend", mainSquare.element);
    
    mainSquare.width = patternTwoBigSquareWidth
    mainSquare.height = patternTwoBigSquareWidth
    mainSquare.leftOffset = (patternTwoBigSquareXYOffset * 2)
    mainSquare.topOffset = patternTwoBigSquareXYOffset
    // update position and size     
    document.querySelector(mainSquare.elementSelector).style.width = mainSquare.width + "px";
    document.querySelector(mainSquare.elementSelector).style.height = mainSquare.width + "px";
    document.querySelector(mainSquare.elementSelector).style.left = "".concat((patternTwoBigSquareXYOffset * 2), "px");
    document.querySelector(mainSquare.elementSelector).style.top = "".concat(patternTwoBigSquareXYOffset, "px");
    //document.querySelector(mainSquare.elementSelector).style.transform = `rotate(${mainSquare.rotation * 90}deg)`;
    //document.querySelector(mainSquare.elementSelector).insertAdjacentHTML("beforeend", paisleyElementGroupOne)

    /////////////////////////////////
    patternTwoMSizePeripherySquareWidth = centralContainerSquareWidth / 3
    patternTwoSSizePeripherySquareWidth = centralContainerSquareWidth / 6

    // Top left square
    // PeripherySquare: width, left, top, rotation, n
    //let topLeftPeripherySquareRotation = Math.floor(Math.random() * 4)
    //let topLeftPeripherySquare = new MSizePeripherySquare(patternTwoMSizePeripherySquareWidth, 0, 0, topLeftPeripherySquareRotation, 0)
    //centralContainerSquare.insertAdjacentHTML("beforeend", topLeftPeripherySquare.element);
    // set
   
    topLeftPeripherySquare.width = patternTwoMSizePeripherySquareWidth
    topLeftPeripherySquare.height = patternTwoMSizePeripherySquareWidth
    topLeftPeripherySquare.leftOffset = 0
    topLeftPeripherySquare.topOffset = 0

    document.querySelector(topLeftPeripherySquare.elementSelector).style.width = topLeftPeripherySquare.width + "px"
    document.querySelector(topLeftPeripherySquare.elementSelector).style.height = topLeftPeripherySquare.width + "px"
    // set + update
    document.querySelector(topLeftPeripherySquare.elementSelector).style.left = topLeftPeripherySquare.leftOffset + "px"
    document.querySelector(topLeftPeripherySquare.elementSelector).style.top = topLeftPeripherySquare.toptOffset + "px"
    //document.querySelector(topLeftPeripherySquare.elementSelector).style.transform = `rotate(${topLeftPeripherySquare.rotation * 90}deg)`;
    //document.querySelector(topLeftPeripherySquare.elementSelector).insertAdjacentHTML("beforeend", paisleyElementDropOne)

    // Bottom left square
    // PeripherySquare: width, left, top, n
    //let bottomLeftPeripherySquareRotation = Math.floor(Math.random() * 4)
    //let bottomLeftPeripherySquare = new MSizePeripherySquare(patternTwoMSizePeripherySquareWidth, 0, (patternTwoMSizePeripherySquareWidth * 2), bottomLeftPeripherySquareRotation, 1)
    //centralContainerSquare.insertAdjacentHTML("beforeend", bottomLeftPeripherySquare.element);
    // set
    //0, (patternTwoMSizePeripherySquareWidth * 2)
    bottomLeftPeripherySquare.width = patternTwoMSizePeripherySquareWidth
    bottomLeftPeripherySquare.height = patternTwoMSizePeripherySquareWidth
    bottomLeftPeripherySquare.leftOffset = 0
    bottomLeftPeripherySquare.topOffset = patternTwoMSizePeripherySquareWidth
    // update
    document.querySelector(bottomLeftPeripherySquare.elementSelector).style.width = bottomLeftPeripherySquare.width + "px"
    document.querySelector(bottomLeftPeripherySquare.elementSelector).style.height = bottomLeftPeripherySquare.width + "px"
    document.querySelector(bottomLeftPeripherySquare.elementSelector).style.left = bottomLeftPeripherySquare.leftOffset + "px"
    document.querySelector(bottomLeftPeripherySquare.elementSelector).style.top = bottomLeftPeripherySquare.topOffset  + "px"
    //document.querySelector(bottomLeftPeripherySquare.elementSelector).style.transform = `rotate(${bottomLeftPeripherySquare.rotation * 90}deg)`;
    //document.querySelector(bottomLeftPeripherySquare.elementSelector).insertAdjacentHTML("beforeend", paisleyElementDropTwo)


    // Top Side S square 1
    
    
    //topSidePeripherySquareOnePosition = Math.floor(Math.random() * 4)
    //let topSidePeripherySquareRotation = Math.floor(Math.random() * 4)
    //console.log(topSidePeripherySquareOnePosition)
    // PeripherySquare: width, left, top, position, rotation n
    //let topSidePeripherySquareOne = new SSizePeripherySquare(patternTwoSSizePeripherySquareWidth, patternTwoMSizePeripherySquareWidth + (patternTwoSSizePeripherySquareWidth * topSidePeripherySquareOnePosition), 0, topSidePeripherySquareOnePosition, topSidePeripherySquareRotation, 0)
    //centralContainerSquare.insertAdjacentHTML("beforeend", topSidePeripherySquareOne.element);
    
    // PeripherySquare: width, left, top, position, rotation n
    //topSidePeripherySquareOne = new SSizePeripherySquare(patternTwoSSizePeripherySquareWidth, patternTwoMSizePeripherySquareWidth + (patternTwoSSizePeripherySquareWidth * topSidePeripherySquareOnePosition), 0, topSidePeripherySquareOnePosition, topSidePeripherySquareRotation, 0)
    // set
    topSidePeripherySquareOne.width = patternTwoSSizePeripherySquareWidth
    topSidePeripherySquareOne.height = patternTwoSSizePeripherySquareWidth
    topSidePeripherySquareOne.leftOffset = patternTwoMSizePeripherySquareWidth + (patternTwoSSizePeripherySquareWidth * topSidePeripherySquareOnePosition)
    topSidePeripherySquareOne.topOffset = 0
    // update
    document.querySelector(topSidePeripherySquareOne.elementSelector).style.width = topSidePeripherySquareOne.width + "px"
    document.querySelector(topSidePeripherySquareOne.elementSelector).style.height = topSidePeripherySquareOne.width + "px"
    document.querySelector(topSidePeripherySquareOne.elementSelector).style.left = topSidePeripherySquareOne.leftOffset + "px"
    document.querySelector(topSidePeripherySquareOne.elementSelector).style.top = topSidePeripherySquareOne.topOffset + "px"
    document.querySelector(topSidePeripherySquareOne.elementSelector).style.transform = `rotate(${topSidePeripherySquareOne.rotation * 90}deg)`;
    //document.querySelector(topSidePeripherySquareOne.elementSelector).insertAdjacentHTML("beforeend", paisleyElementSDropTwo)

    // Top Side S square 2
    
    switch(topSidePeripherySquareOnePosition) {
        case 0:
            topSidePeripherySquareTwoPosition = 2
        break;
        case 1:
            topSidePeripherySquareTwoPosition = 3
        break;
        case 2:
            topSidePeripherySquareTwoPosition = 0
        break;
        case 3:
            topSidePeripherySquareTwoPosition = 1
        break;
    }
     
    // PeripherySquare: width, left, top, position, rotation, n
    //let topSidePeripherySquareTwo = new SSizePeripherySquare(patternTwoSSizePeripherySquareWidth, patternTwoMSizePeripherySquareWidth + (patternTwoSSizePeripherySquareWidth * topSidePeripherySquareTwoPosition), (patternTwoSSizePeripherySquareWidth * 5), topSidePeripherySquareTwoPosition, 0, 1)
    //centralContainerSquare.insertAdjacentHTML("beforeend", topSidePeripherySquareTwo.element);
    // PeripherySquare: width, left, top, position, rotation, n
    //topSidePeripherySquareTwo = new SSizePeripherySquare(patternTwoSSizePeripherySquareWidth, patternTwoMSizePeripherySquareWidth + (patternTwoSSizePeripherySquareWidth * topSidePeripherySquareTwoPosition), (patternTwoSSizePeripherySquareWidth * 5), topSidePeripherySquareTwoPosition, 0, 1)
    // set
    topSidePeripherySquareTwo.width = patternTwoSSizePeripherySquareWidth
    topSidePeripherySquareTwo.height = patternTwoSSizePeripherySquareWidth
    topSidePeripherySquareTwo.leftOffset = patternTwoMSizePeripherySquareWidth + (patternTwoSSizePeripherySquareWidth * topSidePeripherySquareTwoPosition)
    topSidePeripherySquareTwo.topOffset = (patternTwoSSizePeripherySquareWidth * 5)
    // update
    document.querySelector(topSidePeripherySquareTwo.elementSelector).style.width = topSidePeripherySquareTwo.width + "px"
    document.querySelector(topSidePeripherySquareTwo.elementSelector).style.height = topSidePeripherySquareTwo.width + "px"
    
    document.querySelector(topSidePeripherySquareTwo.elementSelector).style.left = topSidePeripherySquareTwo.leftOffset  + "px"
    document.querySelector(topSidePeripherySquareTwo.elementSelector).style.top = topSidePeripherySquareTwo.topOffset  + "px"
    //document.querySelector(topSidePeripherySquareTwo.elementSelector).style.transform = `rotate(${topSidePeripherySquareOne.rotation * 90}deg)`;
    //document.querySelector(topSidePeripherySquareTwo.elementSelector).insertAdjacentHTML("beforeend", paisleyElementFlower)


}
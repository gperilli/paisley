function setLayOut() {
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
    centralContainerSquare.style.left = "".concat(centralContainerXOffset, "px");
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

    if (document.querySelector("#patternOnePeripherySquare") == null) {
        const patternOnePeripherySquareElement = `<div id="patternOnePeripherySquare" class="outline" style="position: absolute;"></div>`;
        centralContainerSquare.insertAdjacentHTML("beforeend", patternOnePeripherySquareElement);
        const patternOnePeripherySquare = document.querySelector("#patternOnePeripherySquare")
    }

    // update position and size 
    patternOnePeripherySquare.style.width = "".concat(patternOnePeripherySquareWidth,"px");
    patternOnePeripherySquare.style.height = "".concat(patternOnePeripherySquareWidth,"px");
    patternOnePeripherySquare.style.left = "".concat(patternOnePeripherySquareXYOffset, "px");
    patternOnePeripherySquare.style.top = "".concat(patternOnePeripherySquareXYOffset, "px");
}

window.addEventListener( 'load', setLayOut );
window.addEventListener( 'resize', setLayOut );
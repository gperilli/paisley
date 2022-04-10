function setLayOut() {
    //Get screen size
    const body = document.querySelector("body");
    let bodyWidth = body.clientWidth;
    let bodyHeight = body.clientHeight;
    let screenWidth = window.innerWidth;
	let screenHeight = window.innerHeight;
    let centralContainerSquareWidth, centralContainerXOffset, centralContainerYOffset;
    //Set layout of UI Column, bottom/side creator link, and 2 content squares
    console.log(`Screen height: ${screenHeight}, screen width: ${screenWidth}`);
    console.log(`Body height: ${bodyHeight}, body width: ${bodyWidth}`);

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

    let centralContainerSquareElement = `<div id="centralContainerSquare" style="position: absolute;"></div>`;
    body.insertAdjacentHTML("beforeend", centralContainerSquareElement);
    let centralContainerSquare = document.querySelector("#centralContainerSquare");
    
    centralContainerSquare.style.width = "".concat(centralContainerSquareWidth,"px");
    centralContainerSquare.style.height = "".concat(centralContainerSquareWidth,"px");
    centralContainerSquare.style.backgroundColor = "#eee";
    centralContainerSquare.style.left = "".concat(centralContainerXOffset, "px");
    centralContainerSquare.style.top = "".concat(centralContainerYOffset, "px");
}

window.addEventListener( 'load', setLayOut );
window.addEventListener( 'resize', setLayOut );
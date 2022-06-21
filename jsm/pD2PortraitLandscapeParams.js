
export { portraitLandscapeParams }

let centralContainerSquareWidth, centralContainerXOffset, centralContainerYOffset;

function portraitLandscapeParams(portraitOrLandscape, screenWidth, screenHeight) {
    if (portraitOrLandscape == true) {
        centralContainerSquareWidth = screenHeight;
        centralContainerXOffset = ((screenWidth - screenHeight) / 2);
        centralContainerYOffset = 0;
    } else {
        centralContainerSquareWidth = screenWidth;
        centralContainerXOffset = 0;
        centralContainerYOffset = ((screenHeight - screenWidth) / 2);
    }
    let centralContainerParams = [centralContainerSquareWidth, centralContainerXOffset, centralContainerYOffset]
    return centralContainerParams
}
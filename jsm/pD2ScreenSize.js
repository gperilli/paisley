import { body } from '/jsm/paisleyDesignTwo.js'
export { screenSize }



function screenSize() {
    let bodyWidth = body.clientWidth;
    let bodyHeight = body.clientHeight;
    let screenWidth = window.innerWidth;
	let screenHeight = window.innerHeight;
    let screenDimensions = [screenWidth, screenHeight]
    
        return screenDimensions
    
}
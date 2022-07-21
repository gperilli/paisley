//import * as THREE from 'three';
export { ObjectFadeIn }

class ObjectFadeIn {
    constructor(duration, objectMaterialToBeFaded) {
        this.duration = duration;
        this.objectFadeInClock = new THREE.Clock(true);
        this.opacity = 0;
        this.fading = false;
        this.objectMaterialToBeFaded = objectMaterialToBeFaded;
    }
    
    startObjectFadeIn() {
        this.fading = true;
    }

    fadeInObject() {
    
        let t = this.objectFadeInClock.getElapsedTime(); //elapsed time
        let	b = 0; // starting point
        let	c = 1; // distance
        let d = this.duration; // duration
        this.opacity = easeOutExpo(t, b, c, d);
        this.objectMaterialToBeFaded.opacity = this.opacity;
        //console.log(this.objectMaterialToBeFaded.opacity);
        if (t >= d) {
            this.fading = false; // stop the fade
                // set to destination position
            this.objectFadeInClock.stop(); // stop the clocks
        } 
    }
}
function guageGlower(rpmGuage, torqueGuage, powerGuage) {
    //console.log("Starting knob glow");
    class guageGlow {
        constructor(frequency, amplitude) {
            this.frequency = frequency;
            this.amplitude = amplitude;
            this.glowFrame = setInterval(glowFrame, 10);
            this.glowClock = 0;
            this.glowClockS = 0;
            this.oscillatorRunning = false;
        }
    }

    function glowFrame() {
        cTGuageGlow.glowClock += 10;
        cTGuageGlow.glowClockS = cTGuageGlow.glowClock / 1000;
        let oscGlowValue = ((Math.sin(((Math.PI * 2) / cTGuageGlow.frequency) * cTGuageGlow.glowClockS)) * cTGuageGlow.amplitude) + cTGuageGlow.amplitude;
        rpmGuage._glowValue = oscGlowValue;
        rpmGuage.redraw();
        torqueGuage._glowValue = oscGlowValue;
        torqueGuage.redraw();
        powerGuage._glowValue = oscGlowValue;
        powerGuage.redraw();
    }
    let cTGuageGlow = new guageGlow(1.5, 3);
}
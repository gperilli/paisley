import { paisleySettings } from '/jsm/paisleyDesignThree.js'
export { Menu }

class Menu {
    constructor(menuParams) {
        this.coloring = menuParams.coloring
        this.fadeIn = menuParams.fadeIn
        this.opacity = menuParams.opacity
        this.init()
    }

     menuHTML() {
        return `
            <fieldset style="background: rgba(255, 255, 255, 0.9)">
                <legend>Options:</legend>
                <div style="display: flex; justify-content: flex-start; flex-direction: row; ">
                
                <div style="display: flex; justify-content: flex-start; flex-direction: column; margin-right: 10px;">
                    <div>
                    <input class="coloringRadio" type="radio" id="greys" name="colors" ${ this.coloring == "greys" ? "checked" : "" }>
                    <label for="scales">Shades of Gray</label>
                    </div>
                
                    <div>
                    <input class="coloringRadio" type="radio" id="colors" name="colors" ${ this.coloring == "colors" ? "checked" : "" }>
                    <label for="horns">Random Colors</label>
                    </div>

                    <div>
                    <input class="coloringRadio" type="radio" id="monochrome" name="colors" ${ this.coloring == "monochrome" ? "checked" : "" }>
                    <label for="horns">Monochrome</label>
                    </div>
                </div>
                
                <div style="display: flex; justify-content: flex-start; flex-direction: column;">
                    <div>
                    <input type="radio" id="horns" name="fadeIn" ${ this.fadeIn == "fadeIn" ? "checked" : "" }>
                    <label for="horns">Fade In</label>
                    </div>
                    <div>
                    <input type="radio" id="horns" name="fadeIn" ${ this.fadeIn == "randomElement" ? "checked" : "" }>
                    <label for="horns">Random Element Fade In</label>
                    </div>
                    <div>
                    <input type="radio" id="horns" name="fadeIn" ${ this.fadeIn == "appearOnLoad" ? "checked" : "" }>
                    <label for="horns">Appear on load</label>
                    </div>
                </div>

                <div style="display: flex; justify-content: flex-start; flex-direction: column;">
                    <div>
                    <input type="radio" id="horns" name="opacityoscillation" ${ this.opacity == "oscillating" ? "checked" : "" }>
                    <label for="horns">Opacity Oscillation</label>
                    </div>
                    <div>
                    <input type="radio" id="horns" name="opacityoscillation" ${ this.opacity == "static" ? "checked" : "" }>
                    <label for="horns">Static Opacity</label>
                    </div>
                    
                </div>

                </div>
            </fieldset>

        `
     }

     init() {
        document.querySelector("#menu-container").insertAdjacentHTML("beforeend", this.menuHTML());
        this.eventListeners()
     }

     eventListeners() {
        console.log("eventListenerfunction")
        console.log(document.querySelectorAll(".coloringRadio"))
        document.querySelectorAll(".coloringRadio").forEach((radioButton) => {
            radioButton.addEventListener("click", function(event) {
                console.log(event.target.id)
                //localStorage.setItem()
                paisleySettings.coloring = event.target.id
                console.log(paisleySettings)
                localStorage.setItem("paisleySettings", JSON.stringify(paisleySettings))
            })
        })
     }
}
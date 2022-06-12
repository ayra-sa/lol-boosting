class Select extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <!-- Select -->
      <div class="select-container" tabindex="1">
        <input class="select-option" name="select" type="radio" id="opt1" checked>
        <label for="opt1" class="option">Oranges</label>
        <input class="select-option" name="select" type="radio" id="opt2">
        <label for="opt2" class="option">Apples</label>
        <input class="select-option" name="select" type="radio" id="opt3">
        <label for="opt3" class="option">Grapefruit</label>
        <input class="select-option" name="select" type="radio" id="opt4">
        <label for="opt4" class="option">Bananas</label>
        <input class="select-option" name="select" type="radio" id="opt5">
        <label for="opt5" class="option">Watermelon</label>
      </div>
      <!-- Select end -->
      `
    }
  }
  
  customElements.define("select-component", Select);
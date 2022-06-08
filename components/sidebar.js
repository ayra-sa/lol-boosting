class Sidebar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <aside>
            <div class="games-selection">
                <div class="game-left">
                    <h4 class="heading-4">World Of Warcraft</h4>
                    <p class="body-3">Blizzard Entertainment</p>
                </div>
            
                <img
                src="assets/images/icons/arrow-down.svg"
                class="drop-down"
                alt="icon"
                />
            </div>
            
            <ul class="categories">
                <li class="category-list">
                    <p class="body-2">Categories</p>
                </li>
                <li class="category-list">
                    <a class="link-list active" href="product-slider.html">
                    <span class="heading-4">WOW Gold</span>
                </a>
                </li>
                <li class="category-list">
                    <a class="link-list active" href="product-slider.html">
                    <span class="heading-4">WOW Gold</span>
                </a>
                </li>
                <li class="category-list">
                    <a class="link-list active" href="product-slider.html">
                    <span class="heading-4">WOW Gold</span>
                </a>
                </li>
                <li class="category-list">
                    <a class="link-list active" href="product-slider.html">
                    <span class="heading-4">WOW Gold</span>
                </a>
                </li>
                <li class="category-list">
                    <a class="link-list active" href="product-slider.html">
                    <span class="heading-4">WOW Gold</span>
                </a>
                </li>
                <li class="category-list">
                    <a class="link-list active" href="product-slider.html">
                    <span class="heading-4">WOW Gold</span>
                </a>
                </li>
            </ul>
        </aside>;
      `
    }
  }
  
  customElements.define("sidebar-component", Sidebar);
class Sidebar extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
        <aside class="sidebar">
            <div class="sidebar-nav-left">
                <a href="index.html" class="sidebar-brand">
                    <img src="assets/images/logo.svg" alt="logo" />
                </a>
                <div class="search-bar">
                  <input type="text" placeholder="Search for boosting">
                  <a href="#" class="search-btn">
                    <img src="./assets/images/icons/search.svg" alt="icon" />
                  </a>
                </div>
            </div>
            <!-- Dropdown -->
            <div id="dropdownSidebar">
                <div class="dropdown-wrap">
                <div class="dropdown-header">
                    <div class="dropdown-title">
                        <h2 class="heading-4">World Of Warcraft</h2>
                        <p class="body-4">Blizzard Entertainment</p>
                    </div>
                    <img class="dropdown-icon" src="assets/images/icons/arrow-down.svg" alt="icon">
                </div>

                <ul class="dropdown-body">
                    <li class="dropdown-body-top">
                    <p class="body-2">Other Games</p>
                    </li>
                    <li>
                    <a href="#" class="dropdown-link">
                        <p class="heading-4 text-grey">League Of Legend</p>
                        <span class="body-4 blueText">Riot Games</span>
                    </a>
                    </li>
                    <li>
                    <a href="#" class="dropdown-link">
                        <p class="heading-4 text-grey">League Of Legend</p>
                        <span class="body-4 blueText">Riot Games</span>
                    </a>
                    </li>
                    <li>
                    <a href="#" class="dropdown-link">
                        <p class="heading-4 text-grey">League Of Legend</p>
                        <span class="body-4 blueText">Riot Games</span>
                    </a>
                    </li>
                    <li>
                    <a href="#" class="dropdown-link">
                        <p class="heading-4 text-grey">League Of Legend</p>
                        <span class="body-4 blueText">Riot Games</span>
                    </a>
                    </li>
                    <li>
                    <a href="#" class="dropdown-link">
                        <p class="heading-4">League Of Legend</p>
                        <span class="body-4 blueText">Riot Games</span>
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            <!-- Dropdown end -->
            
            <ul class="categories">
                <li class="category-list hide">
                    <p class="body-2">Categories</p>
                </li>
                <li class="category-list">
                    <a class="link-list active" href="product-slider.html">
                        <span class="heading-4">WOW Gold</span>
                    </a>
                </li>
                <li class="category-list">
                    <a class="link-list" href="product-slider2.html">
                        <span class="heading-4">Leveling</span>
                    </a>
                </li>
                <li class="category-list">
                    <a class="link-list" href="product-slider.html">
                    <span class="heading-4">Character boosting</span>
                </a>
                </li>
                <li class="category-list">
                    <a class="link-list" href="product-slider.html">
                        <span class="heading-4">Raids</span>
                    </a>
                </li>
                <li class="category-list">
                    <a class="link-list" href="product-slider.html">
                        <span class="heading-4">Items</span>
                    </a>
                </li>
                <li class="category-list">
                    <a class="link-list" href="product-slider.html">
                        <span class="heading-4">Achievement</span>
                    </a>
                </li>
            </ul>
        </aside>
      `
    }
  }
  
  customElements.define("sidebar-component", Sidebar);
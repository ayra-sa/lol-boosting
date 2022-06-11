class Dropdown extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <!-- Dropdown -->
        <div id="dropdown">
            <div class="dropdown-wrap">
            <div class="dropdown-header">
                <div class="dropdown-title">
                <h2 class="heading-4">World Of Warcraft</h2>
                <p class="body-3">Blizzard Entertainment</p>
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
      `;
    }
  }
  
  customElements.define("dropdown-component", Dropdown);
  
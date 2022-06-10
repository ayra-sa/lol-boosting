class Rank extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class="basket rank-up-mobo">
            <div class="header">
                <h2 class="heading-4">My Order</h2>
                <div id="closeOrder">
                    <img src="./assets/images/icons/close-mobo.svg" alt="icon" >
                </div>
            </div>
            <div class="basket-body">
                <div class="bb-info mt-1">
                <p class="heading-7 bb-title">Completion Time</p>
                <p class="heading-6">1 Day</p>
            </div>
            <div class="bb-info mt-1">
                    <p class="heading-7 bb-title">Completion Time</p>
                    <div>
                        <p class="heading-6">Champion <span class="price blueText">($5)</span></p>
                        <p class="heading-6">Champion <span class="price blueText">($5)</span></p>
                    </div>
                </div>
            <div class="bb-info mt-1">
                    <p class="heading-7 bb-title">Completion Time</p>
                    <p class="heading-6">12 Fox Coins (1.4$))</p>
            </div>
                <div class="bb-detail">
                    <p class="heading-7 bb-title">Completion Time</p>
                    <p class="heading-3">$34</p>
                </div>
                <div class="btn-container">
                <a href="#" id="rankCheckout">
                    <button class="btn btn-primary">
                    <span>Rank Up</span>
                    <img src="assets/images/icons/arrow-up.svg" alt="icon">
                    </button>
                </a>
                </div>
            </div>
        </div>
      `
    }
  }
  
  customElements.define("rank-component", Rank);
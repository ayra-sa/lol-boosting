class Card extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class="card">
      <img src="./assets/images/image 5.png" class="bg-image" alt="bg" />
      <div class="card-info">
        <div class="card-top">
          <span class="tag most">Most popular</span>
          <span class="tag special">Special Offer</span>
        </div>
        <div class="card-body">
          <div class="card-body-left">
            <h3 class="heading-3">WOW Character</h3>
            <ul class="list-wrap">
              <li class="list">
                <p class="body-5">Stream on demand</p>
              </li>
              <li class="list">
                <p class="body-5">Stream on demand</p>
              </li>
              <li class="list">
                <p class="body-5">Stream on demand</p>
              </li>
            </ul>
            <h3 class="heading-3">$89.99</h3>
          </div>
          <a href="#">
            <button class="btn btn-primary">Buy</button>
          </a>
        </div>
      </div>
    </div>
        
      `
    }
  }
  
  customElements.define("card-component", Card);
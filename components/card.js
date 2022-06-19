class Card extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
            <!-- Product Card -->
                <div class="product-single-card">
                  <div class="product-single-card-info">
                    <div class="product-single-card-top">
                      <span class="tag most">Most popular</span>
                      <span class="tag special">Special Offer</span>
                    </div>
                    <div class="product-single-card-body">
                      <div class="product-single-card-body-left">
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
                      </div>
                      <div class="product-single-card-body-bottom">
                        <h3 class="heading-3">$89.99</h3>
                        <a href="#">
                          <button class="btn btn-primary">
                            <span>Buy</span>
                            <img
                              src="./assets/images/icons/arrow-up.svg"
                              alt="icon"
                            />
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <!-- Product Card end -->
      `
    }
  }
  
  customElements.define("card-component", Card);
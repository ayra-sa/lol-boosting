class Work extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="section">
      <div class="work">
        <div class="work-left">
          <span class="tag main">Work With Us</span>
          <h2 class="heading-2">
            We Are <span class="blueText">Hiring</span>
          </h2>
          <p class="body-3">
            League boosting solution from any to every division. LoL boosting
            is a very popular gaming service and a modern standard for anyone
            who has respect for their time.
          </p>
        </div>
        
        <a href="#">
          <button class="btn btn-primary">
            <span>Find Job</span>
            <img src="assets/images/icons/arrow-up.svg" alt="icon">
          </button>
        </a>

        <img class="work-img" src="./assets/images/PngItem_work.png" alt="work" />
      </div>
    </section>
      `
    }
  }
  
  customElements.define("work-component", Work);
class Faq extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="faq-box">
        <button class="faq-top">
            <h3 class="heading-3">How popular is LoL Boosting?</h3>
            <img class="faq-icon" src="" alt="" />
        </button>
        <p class="body-3">
            LoL Boosting is an essential part of the solo queue gaming experience due to
            it’s ability to create a positive mindset by playing stress free for a very
            low cost. Nobody wants to be miserable and spend weeks grinding their
            previously owned rank back from a bad loss streak, just to save a few bucks.
        </p>
        </div>;
      `;
  }
}

customElements.define("faq-component", Faq);

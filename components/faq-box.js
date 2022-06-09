class Faq extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="faq-box mb-2">
          <details>
            <summary class="heading-3">How popular is LoL Boosting?</summary>
            <div class="faq_content">
              <p class="body-3">
                LoL Boosting is an essential part of the solo queue gaming experience due to
                it’s ability to create a positive mindset by playing stress free for a very
                low cost. Nobody wants to be miserable and spend weeks grinding their
                previously owned rank back from a bad loss streak, just to save a few bucks.
              </p>
            </div>
          </details>
        </div>
      `;
  }
}

customElements.define("faq-component", Faq);

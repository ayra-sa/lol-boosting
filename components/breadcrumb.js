class Breadcrumb extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="bread">
        <a href="#">
            <span class="body-4">Home</span>
        </a>
        <img src="" alt="icon" />
        <a href="#">
            <span class="body-4">Product</span>
        </a>
        <img src="" alt="icon" />
    </div>;
    `;
  }
}

customElements.define("breadcrumb-component", Breadcrumb);

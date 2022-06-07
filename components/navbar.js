class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar">
      <div class="nav">
        <div class="container">
          <div class="nav-wrap">
            <div class="nav-left">
              <img src="./assets/images/" alt="icon">
              <a href="/">
                <img src="./assets/images/logo.svg" alt="logo">
              </a>
              <div class="search-bar">
                <input placeholder="Search for boosting">
                <img src="./assets/images/icons/search.svg" alt="icon">
              </div>
              <ul class="nav-menu">
                <li class="nav-item"><a href="product.html">Product</a></li>
                <li class="nav-item"><a href="about-us.html">About</a></li>
                <li class="nav-item"><a href="#">Hiring</a></li>
                <li class="nav-item"><a href="blog.html">Blog</a></li>
                <li class="nav-item"><a href="faq.html">FAQ</a></li>
              </ul>
            </div>

            <div class="btn-navbar">
              <a class="btn btn-primary login">Log In</a>
              <img src="./assets/images/icons/order.svg" alt="icon">
            </div>
          </div>
        </div>
      </div>
    </nav>
      
      `;
  }
}

customElements.define("navbar-component", Navbar);

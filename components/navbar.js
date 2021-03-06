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
              <img src="./assets/images/icons/menu.png" class="mobile-menu" alt="icon">
              <a href="index.html">
                <img src="./assets/images/logo.svg" alt="logo">
              </a>
              <div class="search-bar search-bar-home">
                <input type="text" placeholder="Search for boosting">
                <a href="#" class="search-btn">
                  <img src="./assets/images/icons/search.svg" alt="icon" />
                </a>
              </div>
              <div class="search-bar on-tablet">
                  <!-- <input type="text" placeholder="Search for boosting"> -->
                  <img src="./assets/images/icons/search.svg" alt="icon" />
                </div>
                <div class="search-bar-hidden homepage">
                  <input type="text" placeholder="Search for boosting">
                  <a href="#" class="search-btn">
                    <img src="./assets/images/icons/search.svg" alt="icon" />
                  </a>
                </div>
              </div>
              
              <ul class="nav-menu">
                <li class="nav-item-header">
                  <h3 class="heading-3">Menu</h3>
                  <img class="close-mobo" src="./assets/images/icons/close-mobo.svg" alt="icon" >
                </li>
                <li class="nav-search on-mobo">
                  <div class="search-bar">
                    <input type="text" placeholder="Search for boosting">
                    <img src="./assets/images/icons/search.svg" alt="icon">
                  </div>
                </li>
                <li class="nav-item"><a class="heading-5" href="product.html">Product</a></li>
                <li class="nav-item"><a class="heading-5" href="about-us.html">About</a></li>
                <li class="nav-item"><a class="heading-5" href="#">Hiring</a></li>
                <li class="nav-item"><a class="heading-5" href="blog.html">Blog</a></li>
                <li class="nav-item"><a class="heading-5" href="faq.html">FAQ</a></li>
                
              </ul>

            <div class="btn-navbar">
              <a class="btn btn-primary" id="modalBtn">Log In</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    `;
  }
}

customElements.define("navbar-component", Navbar);

class NavbarLogin extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <!-- Navbar -->
      <nav class="navbar">
        <div class="nav">
          <div class="container">
            <div class="nav-wrap">
              <div class="nav-left">
                <img
                  src="./assets/images/icons/menu.png"
                  class="mobile-menu"
                  alt="icon"
                />
                <a href="index.html">
                  <img src="./assets/images/logo.svg" alt="logo" />
                </a>
                <div class="search-bar w-auto">
                  <!-- <input type="text" placeholder="Search for boosting"> -->
                  <img src="./assets/images/icons/search.svg" alt="icon" />
                </div>
                <ul class="nav-menu">
                  <li class="nav-item-header">
                    <h3 class="heading-3">Menu</h3>
                    <img
                      class="close-mobo"
                      src="./assets/images/icons/close-mobo.svg"
                      alt="icon"
                    />
                  </li>
                  <li class="nav-search on-mobo">
                    <div class="search-bar">
                      <input type="text" placeholder="Search for boosting">
                      <img src="./assets/images/icons/search.svg" alt="icon" />
                    </div>
                  </li>
                  <li class="nav-item">
                    <a class="heading-5" href="product.html">Product</a>
                  </li>
                  <li class="nav-item">
                    <a class="heading-5" href="about-us.html">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="heading-5" href="#">Hiring</a>
                  </li>
                  <li class="nav-item">
                    <a class="heading-5" href="blog.html">Blog</a>
                  </li>
                  <li class="nav-item">
                    <a class="heading-5" href="faq.html">FAQ</a>
                  </li>
                  <li class="nav-item on-mobo">
                    <a class="heading-5 blueText" href="order.html">My Order</a>
                  </li>
                  <li class="nav-item on-mobo">
                    <a class="heading-5 blueText" href="#">Account</a>
                  </li>
                </ul>
              </div>
  
              <div class="btn-navbar">
                <div class="search-bar on-tablet">
                  <!-- <input type="text" placeholder="Search for boosting"> -->
                  <img src="./assets/images/icons/search.svg" alt="icon" />
                </div>
                <a href="order.html">
                  <button class="btn btn-primary btn-order">My Order</button>
                </a>
                <div class="profile-btn">
                  <img src="./assets/images/user.png" alt="icon" />
                </div>
                <div id="orderBtn">
                  <img
                    class="on-mobo"
                    src="./assets/images/icons/order.svg"
                    alt="icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <!-- Navbar end-->
      `;
    }
  }
  
  customElements.define("navbarlogin-component", NavbarLogin);
  
class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="footer-wrap">
      <div class="container">
        <div class="footer-top">
          <div class="footer-left">
            <div class="brand-footer">
              <img class="brand" src="./assets/images/logo.svg" alt="logo" />
              <div class="brand-name">
                <h3 class="heading-3">Lol Boosting</h3>
                <p class="body-3">aLeague boosting solution from any to every division.</p>
              </div>
            </div>
            <p class="body-3 footer-info">League boosting solution from any to every division.</p>
            <div class="socmed">
              <a href="#" class="socmed-link">
                <img src="./assets/images/icons/twitter.svg" alt="icon" />
              </a>
              <a href="#" class="socmed-link">
                <img src="./assets/images/icons/twitter.svg" alt="icon" />
              </a>
              <a href="#" class="socmed-link">
                <img src="./assets/images/icons/twitter.svg" alt="icon" />
              </a>
              <a href="#" class="socmed-link">
                <img src="./assets/images/icons/twitter.svg" alt="icon" />
              </a>
              <a href="#" class="socmed-link">
                <img src="./assets/images/icons/twitter.svg" alt="icon" />
              </a>
            </div>

            <a href="#" class="email">
              <img src="./assets/images/icons/email.svg" alt="icon" /> support@eloboostleague.com
            </a>
          </div>

          <div class="footer-right">
            <div class="footer-menu">
              <h2 class="heading-5">Information</h2>
              <div class="footer-links">
                <a href="#">
                  <p class="body-3">About us</p>
                </a>
                <a href="#">
                  <p class="body-3">About us</p>
                </a>
                <a href="#">
                  <p class="body-3">About us</p>
                </a>
                <a href="#">
                  <p class="body-3">About us</p>
                </a>
              </div>
            </div>
            <div class="footer-menu">
              <h2 class="heading-5">Information</h2>
              <div class="footer-links">
                <a href="#">
                  <p class="body-3">About us</p>
                </a>
                <a href="#">
                  <p class="body-3">About us</p>
                </a>
                <a href="#">
                  <p class="body-3">About us</p>
                </a>
                <a href="#">
                  <p class="body-3">About us</p>
                </a>
              </div>
            </div>
            <div class="footer-menu">
              <h2 class="heading-5">Information</h2>
              <div class="footer-links">
                <a href="#">
                  <p class="body-3">About us</p>
                </a>
                <a href="#">
                  <p class="body-3">About us</p>
                </a>
                <a href="#">
                  <p class="body-3">About us</p>
                </a>
                <a href="#">
                  <p class="body-3">About us</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="footer-bottom-wrap">
            <p class="copyright">© 2014 - 2021 All Rights Reserved</p>

            <div class="btm-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    `;
  }
}

customElements.define("footer-component", Footer);

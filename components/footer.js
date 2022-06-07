class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="footer-wrap">
      <div class="container">
        <div class="footer-top">
          <div class="footer-top">
            <img class="brand" src="./assets/images/logo-footer.png" alt="logo" />
            <p>League boosting solution from any to every division.</p>
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

            <a href link="/">
              <img src="./assets/images/icons/email.svg" alt="icon" /> support@eloboostleague.com
            </a>
          </div>

          <div class="footer-right">
            <div class="footer-menu">
              <h6 class="heading-6">Information</h6>
              <div class="footer-links">
                <a href="#">
                  <p class="body-5">About us</p>
                </a>
                <a href="#">
                  <p class="body-5">About us</p>
                </a>
                <a href="#">
                  <p class="body-5">About us</p>
                </a>
                <a href="#">
                  <p class="body-5">About us</p>
                </a>
              </div>
            </div>
            <div class="footer-menu">
              <h6 class="heading-6">Information</h6>
              <div class="footer-links">
                <a href="#">
                  <p class="body-5">About us</p>
                </a>
                <a href="#">
                  <p class="body-5">About us</p>
                </a>
                <a href="#">
                  <p class="body-5">About us</p>
                </a>
                <a href="#">
                  <p class="body-5">About us</p>
                </a>
              </div>
            </div>
            <div class="footer-menu">
              <h6 class="heading-6">Information</h6>
              <div class="footer-links">
                <a href="#">
                  <p class="body-5">About us</p>
                </a>
                <a href="#">
                  <p class="body-5">About us</p>
                </a>
                <a href="#">
                  <p class="body-5">About us</p>
                </a>
                <a href="#">
                  <p class="body-5">About us</p>
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

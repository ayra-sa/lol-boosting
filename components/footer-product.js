class FooterProduct extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer class="footer-wrap footer-product">
        <div class="container-fluid">
          <div class="medium-container">
          
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
                    <img src="./assets/images/icons/ig.svg" alt="icon" />
                  </a>
                  <a href="#" class="socmed-link">
                    <img src="./assets/images/icons/tele.svg" alt="icon" />
                  </a>
                  <a href="#" class="socmed-link">
                    <img src="./assets/images/icons/youtube.svg" alt="icon" />
                  </a>
                  <a href="#" class="socmed-link">
                    <img src="./assets/images/icons/t.svg" alt="icon" />
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
                      <p class="body-3">We are hiring</p>
                    </a>
                    <a href="#">
                      <p class="body-3">Blog</p>
                    </a>
                    <a href="#">
                      <p class="body-3">FAQ</p>
                    </a>
                  </div>
                </div>
                <div class="footer-menu">
                  <h2 class="heading-5">Lol Elo Boosting</h2>
                  <div class="footer-links">
                    <a href="#">
                      <p class="body-3">Lol Boosting</p>
                    </a>
                    <a href="#">
                      <p class="body-3">Win League Boost</p>
                    </a>
                    <a href="#">
                      <p class="body-3">Duo Game League Boost</p>
                    </a>
                    <a href="#">
                      <p class="body-3">Cheap League Boost</p>
                    </a>
                    <a href="#">
                      <p class="body-3">Lol Coaching</p>
                    </a>
                  </div>
                </div>
                <div class="footer-menu">
                  <h2 class="heading-5">Information</h2>
                  <div class="footer-links">
                    <a href="#">
                      <p class="body-3">More Games</p>
                    </a>
                    <a href="#">
                      <p class="body-3">Overwatch Boosting</p>
                    </a>
                    <a href="#">
                      <p class="body-3">Valorant Boosting</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="container-fluid">
            <div class="medium-container">
              <div class="footer-bottom-wrap">
                <p class="copyright">© 2014 - 2021 All Rights Reserved</p>
    
                <div class="btm-links">
                  <a href="#">Privacy Policy</a>
                  <a href="#">Privacy Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      `;
    }
  }
  
  customElements.define("footerproduct-component", FooterProduct);
  
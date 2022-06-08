class Login extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
        <div class="login-container">
            <div class="login-wrap">
                <h3 class="heading-3">Login</h3>
                <button class="x-btn">
                    <img src="assets/images/icons/x.svg" alt="icon" />
                </button>
                <form class="login-form">
                    <input class="input" placeholder="User" type="text" required="true" />
                    <div class="password">
                        <input
                            class="input"
                            placeholder="Password"
                            type="password"
                            required="true"
                        />
                        <div class="eye-show">
                            <img src="assets/images/icons/eye.svg" alt="icon" />
                        </div>
                    </div>
                    <div class="remember">
                        <div class="check">
                            <input
                                type="checkbox"
                                class="checkbox"
                                name="checkbox"
                                id="remember"
                            >
                            <label for="remember">Remember Me</label>
                        </div>
                        <a class="forgot" href="/">
                        <p class="heading-7">Forgot password?</p>
                        </a>
                    </div>
                    <input type="submit" value="Login" class="btn btn-mobo btn-primary" />
                </form>
            
                <div class="how-do">
                    <h6 class="heading-6">How do I sign up?</h6>
                    <p class="body-5">
                        After you've made your first purchase, you will recieve an email with
                        your username and password.
                    </p>
                </div>
            </div>
        </div>
      `
    }
  }
  
  customElements.define("login-component", Login);
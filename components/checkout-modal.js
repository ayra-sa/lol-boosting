class Checkout extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <div class="checkout-wrap">
        <div class="checkout-box">
            <h2 class="heading-2">Checkout</h2>

            <button class="x-btn">
            <img src="assets/images/icons/x.svg" alt="icon" />
            </button>

            <div class="checkout-content">
            <div class="left">
                <div class="personal">
                <h3 class="heading-3 mb-1">Personal information</h3>
                <input class="input" placeholder="Username" type="text" />
                <input class="input" placeholder="Password" type="password" />
                <input class="input" placeholder="Summone name" type="text" />
                <input class="input" placeholder="Location" type="text" />
                <input class="input" placeholder="Email" type="email" />
                </div>

                <div class="payment">
                <h3 class="heading-3 mb-1">Payment Method</h3>
                <div class="method">
                    <div class="method-img">
                    <img
                        src="assets/images/payment/american-express-1.svg"
                        alt="payment"
                    />
                    <img
                        src="assets/images/payment/american-express-1.svg"
                        alt="payment"
                    />
                    <img
                        src="assets/images/payment/american-express-1.svg"
                        alt="payment"
                    />
                    <img
                        src="assets/images/payment/american-express-1.svg"
                        alt="payment"
                    />
                    <img
                        src="assets/images/payment/american-express-1.svg"
                        alt="payment"
                    />
                    <img
                        src="assets/images/payment/american-express-1.svg"
                        alt="payment"
                    />
                    </div>
                    <p class="heading-7">Powered by Stripe</p>
                </div>
                <div class="method">
                    <div class="method-img">
                    <img
                        src="assets/images/payment/american-express-1.svg"
                        alt="payment"
                    />
                    <img
                        src="assets/images/payment/american-express-1.svg"
                        alt="payment"
                    />
                    <img
                        src="assets/images/payment/american-express-1.svg"
                        alt="payment"
                    />
                    </div>
                    <p class="heading-7">Powered by Stripe</p>
                </div>

                <div class="checks">
                    <div class="check">
                    <input class="checkbox" type="checkbox" id="oke" />
                    <label for="oke">Loasjadn asdadas asfasf</label>
                    </div>
                    <div class="check">
                    <input class="checkbox" type="checkbox" id="agree" />
                    <label for="agree">asf asfasf asfasf</label>
                    </div>
                </div>
                </div>
            </div>

            <div class="left">
                <div class="order-sum">
                    <h3 class="heading-3 mb-1">Order Summary</h3>
                    <div class="items">
                        <div class="item-box">
                        <p class="heading-4">Initial</p>
                        <img src="assets/images/order/item.png" alt="order" />
                        <p class="heading-3">Silver 3</p>
                    </div>
                </div>

                    <table>
                    <tr>
                        <td><p class="heading-4">Server</p></td>
                        <td class="td-result">
                        <p class="heading-4">Europe West</p>
                        </td>
                    </tr>
                    <tr>
                        <td><p class="heading-4">Server</p></td>
                        <td class="td-result">
                        <p class="heading-4">Europe West</p>
                        </td>
                    </tr>
                    <tr>
                        <td><p class="heading-4">Server</p></td>
                        <td class="td-result">
                        <p class="heading-4">Europe West</p>
                        </td>
                    </tr>
                    <tr>
                        <td><p class="heading-4">Server</p></td>
                        <td class="td-result">
                        <p class="heading-4">Europe West</p>
                        </td>
                    </tr>
                    </table>

                    <div class="coupon">
                        <input class="input" placeholder="Enter coupon" type="text" />
                        <button class="btn btn-secondary">Apply</button>
                    </div>
                </div>
            </div>
            </div>
            <button class="btn btn-primary">Purchase</button>
        </div>
        </div>      
      `;
    }
  }
  
  customElements.define("checkout-component", Checkout);
  
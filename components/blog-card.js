class BlogCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="blog-card">    
        <div class="blog-top">
        <span class="tag special">WOW</span>
        <img class="blog-image" src="./assets/images/latest-img.png" alt="blog" >
        <div class="blog-info">
            <p class="body-2">12 Nov 2021</p>
            <div class="comment">
            <img src="./assets/images/icons/chat.svg" alt="icon" > <span>212</span>
            </div>
        </div>
        </div>
        <a href="blog-detail.html">
            <div class="mt-2">
                <h3 class="heading-3">
                Get the Baby Murloc Satch-Shells Transmog with the Purchase of
                a 6-Month Subscription!
                </h3>
                <p class="body-3">
                Introducing the eggcelent Baby Murloc Satch-Shells transmog*—
                now available to add to your collection! You’ll be able to
                carry this adorable...
                </p>
            </div>
        </a>
    </div>
    `
  }
}

customElements.define("blogcard-component", BlogCard);
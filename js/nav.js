const createNav = () => {
  let nav = document.querySelector(".navbar");

  let innerHTML = `
    <div class="nav">
        <a href="/index.html"><img src="#IMGLOGO" class="brand-logo" alt="my logo" /></a>
        <div class="nav-items">
          <div class="search">
            <input
              type="text"
              class="search-box"
              placeholder="search brand or product"
            />
            <button class="search-btn">search</button>
          </div>
          <a href="/html/signup.html"><img src="#IMGUSER" alt="user" /></a>
          <a href="#"><img src="#IMGCART" alt="cart" /></a>
        </div>
      </div>
      <ul class="links-container">
        <li class="likn-item"><a href="../index.html" class="link">home</a></li>
        <li class="likn-item"><a href="#" class="link">women</a></li>
        <li class="likn-item"><a href="#" class="link">men</a></li>
        <li class="likn-item"><a href="#" class="link">kids</a></li>
        <li class="likn-item"><a href="#" class="link">accesories</a></li>
      </ul> 
    `;

  //console.log(innerHTML);
  innerHTML = innerHTML.replace("#IMGLOGO", ROOT + "/img/balon.png");
  innerHTML = innerHTML.replace("#IMGUSER", ROOT + "/img/user.png");
  innerHTML = innerHTML.replace("#IMGCART", ROOT + "/img/cart.png");
  //console.log(innerHTML);
  nav.innerHTML = innerHTML;
  //console.log(nav);
};

createNav();

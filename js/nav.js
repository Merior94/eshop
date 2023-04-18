const createNav = () => {
  let nav = document.querySelector(".navbar");

  let innerHTML = `
    <div class="nav">
        <img src="#IMGLOGO" class="brand-logo" alt="my logo" />
        <div class="nav-items">
          <div class="search">
            <input
              type="text"
              class="search-box"
              placeholder="search brand or product"
            />
            <button class="search-btn">search</button>
          </div>
          <a href="#"><img src="#IMGUSER" alt="user" /></a>
          <a href="#"><img src="#IMGCART" alt="cart" /></a>
        </div>
      </div>
      <ul class="links-container">
        <li class="likn-item"><a href="#" class="link">home</a></li>
        <li class="likn-item"><a href="#" class="link">women</a></li>
        <li class="likn-item"><a href="#" class="link">men</a></li>
        <li class="likn-item"><a href="#" class="link">kids</a></li>
        <li class="likn-item"><a href="#" class="link">accesories</a></li>
      </ul> 
    `;

  //console.log(innerHTML);
  innerHTML = innerHTML.replace("#IMGLOGO", ROOT + "/img/balon.png");
  innerHTML = innerHTML.replace("#IMGUSER", ROOT + "/img/balon2.png");
  innerHTML = innerHTML.replace("#IMGCART", ROOT + "/img/balon2.png");
  //console.log(innerHTML);
  nav.innerHTML = innerHTML;
  //console.log(nav);
};

createNav();

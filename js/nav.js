const createNav = () => {
  let nav = document.querySelector(".navbar");

  nav.innerHTML = `
    <div class="nav">
        <img src="/img/balon.png" class="brand-logo" alt="my logo" />
        <div class="nav-items">
          <div class="search">
            <input
              type="text"
              class="search-box"
              placeholder="search brand or product"
            />
            <button class="search-btn">search</button>
          </div>
          <a href="#"><img src="/img/balon2.png" alt="user" /></a>
          <a href="#"><img src="/img/balon2.png" alt="cart" /></a>
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
};

createNav();

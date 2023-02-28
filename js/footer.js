const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="/img/balon.png" class="logo" alt="" />
        <div class="footer-ul-container">
          <ul class="category">
            <li class="category-title">men</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
          </ul>
          <ul class="category">
            <li class="category-title">women</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
          </ul>
        </div>
      </div>

      <p class="footer-title">about company</p>
      <p class="info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        hendrerit felis ac aliquam mattis. Mauris molestie erat sagittis turpis
        ultricies auctor. Fusce lacus est, mattis vel porta ut, aliquet ac erat.
        Suspendisse potenti. Cras non est erat. Curabitur tellus augue, cursus
        et massa iaculis, efficitur venenatis massa. Nullam pharetra mattis
        lectus et pulvinar. Praesent nec sem id tortor porttitor congue.
        Curabitur vel consectetur dolor. Pellentesque consequat libero molestie
        magna ornare consectetur. Donec mattis molestie dui, eget feugiat nunc
        iaculis quis. Sed volutpat lorem quis diam congue laoreet. Pellentesque
        sit amet justo vel lacus commodo congue. Vivamus viverra interdum ipsum
        sed ultrices. Morbi tincidunt pellentesque ex, eget maximus arcu lacinia
        sed. Pellentesque quis neque finibus nunc interdum bibendum.
      </p>
      <p class="info">support emails: help@balon</p>
      <p class="info">telephone 666 666 666</p>
      <div class="footer-social-container">
        <div>
          <a href="#" class="social-link">terms & services</a>
          <a href="#" class="social-link">privacy</a>
        </div>
        <div>
          <a href="#" class="social-link">instagram</a>
          <a href="#" class="social-link">facebook</a>
          <a href="#" class="social-link">twitter</a>
        </div>
      </div>
      <p class="footer-credit">cloting,best apparels online store</p>
    `;
}

createFooter();
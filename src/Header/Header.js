import "./Header.css";

function Header() {
  return (
    <header>
      <div class="navbar">
        {/* <!-- Amazon Logo --> */}
        <div class="nav-logo border">
          <div class="logo"></div>
        </div>
        {/* <!-- Amazon Address --> */}
        <div class="nav-address border">
          <div class="addbox">
            <p class="add-first">Deliver to</p>
            <div class="add-icon">
              <i class="fa-solid fa-location-dot"></i>
              <p class="add-s">India</p>
            </div>
          </div>
        </div>
        {/* <!-- Search Bar --> */}
        <div class="nav-search bord">
          <select class="search-select">
            <option>All</option>
          </select>
          <input placeholder="Search Amazon" class="in-search" />
          <div class="search-icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        {/* <!-- Select Language --> */}
        <div class="nav-lang border">
          <div class="add-flag">
            <img src="../Images/us.png" alt="American" class="lang" />
            <select class="add-lang">
              <option>EN</option>
            </select>
          </div>
        </div>
        {/* <!-- Sign In --> */}
        <div class="sign-in border">
          <div class="sign-in-inner">
            <p>
              <span>Hello, Sign in </span>
            </p>
            <select class="sign-in-select">
              <option>Accounts &amp; Lists</option>
            </select>
          </div>
        </div>
        {/* <!-- Returns & Order --> */}
        <div class="nav-RO border">
          <div class="robox">
            <p>
              <span>Returns</span>
            </p>
            <p class="nav-s">&amp; Orders</p>
          </div>
        </div>
        {/* <!-- Cart --> */}
        <div class="nav-cart border">
          <div class="cartbox">
            <i class="fa-solid fa-cart-shopping"></i>
            Cart
          </div>
        </div>
      </div>

      {/* <!-- Panel --> */}

      <div class="panel">
        <div class="panel-all border">
          <i class="fa-solid fa-bars"></i>
          <p>All</p>
        </div>

        <div class="panel-ops">
          <p class="td border">Today's Deals</p>
          <p class="cs border">Customer Service</p>
          <p class="reg border">Registry</p>
          <p class="gc border">Gift Cards</p>
          <p class="sell border">Sell</p>
        </div>

        <div class="panel-deals">Shop deals in Kitchen Utensils</div>
      </div>
    </header>
  );
}

export default Header;

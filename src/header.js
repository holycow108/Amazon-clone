import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div class="navbar">
<header>
{/* <!-- Amazon Logo --> */}

<div class="nav-logo border">
   <div class="logo"></div>
</div>

{/* <!-- Amazon Address --> */}

<div class="nav-address border">
  <div class="addbox">
    <p class="add-first">Deliver to
    </p>
      <div class="add-icon">
        <i class="fa-solid fa-location-dot"></i>
        <p class="add-s">India</p>
      </div>
    </div>
</div>

 {/* <!-- Search Bar --> */}

<div class="nav-search bord">
  <select class="search-select"><option>All</option>
  </select> 
  <input placeholder="Search Amazon" class="in-search">
  <div class="search-icon" >
    <i class="fa-solid fa-magnifying-glass"></i>
  </div>
</div>

{/* <!-- Select Language --> */}

<div class="nav-lang border">
    <div class="add-flag">
      <img src="us.png" alt="American" class="lang">
      <select class="add-lang"><option><p class="select-lang">EN</p></option></select>
    </div>
</div>

{/* <!-- Sign In --> */}

<div class="sign-in border">
  <div class="sign-in-inner">
   <p><span>Hello, Sign in </span></p>
   <select class="sign-in-select">
    <option><p class="sign-in-option">Accounts & Lists</p></option></select>
  </div>
</div>

{/* <!-- Returns & Order --> */}

<div class="nav-RO border">
  <div class="robox">
  <p><span>Returns</span></p>
  <p class="nav-s">& Orders</p>
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

{/* pnel one */}
<div class="panel">

<div class="panel-all border">
  <i class="fa-solid fa-bars"></i>
<p style="flex-shrink: 0;">All</p>
</div>

<div class="panel-ops">
 <p class="td border">Today's Deals</p>
  <p class="cs border">Customer Service</p>
  <p class="reg border">Registry</p>
  <p class="gc border">Gift Cards</p>
  <p class="sell border" >Sell</p>

</div>

<div class="panel-deals">
  Shop deals in Kitchen Utensils
</div>
</div>
      </header>
    </div>
  );
}

export default App;

import React from "react";

// Define image paths as variables
const images = {
  headset: "../Images/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg",
  keyboard: "../Images/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg",
  mouse: "../Images/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg",
  chair: "../Images/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg",
  jeans: "../Images/JEANS.jpg",
  tshirt: "../Images/TSHIRT.jpg",
  tops: "../Images/TOPS.jpg",
  shoes: "../Images/SHOES.jpg",
  pc: "../Images/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg",
  dining: "../Images/DINING.jpg",
  home: "../Images/HOME.jpg",
  kitchen: "../Images/KITCHEN.jpg",
  healthBeauty: "../Images/HEALTH AND BEAUTY.jpg",
  smartphones: "../Images/smartphones.jpg",
  tablets: "../Images/tablets.jpg",
  laptops: "../Images/laptops.jpg",
  tvs: "../Images/tvs.jpg",
  decor: "../Images/decor.jpg",
  toys: "../Images/toys.jpg",
  dresses: "../Images/dresses.jpg",
  knits: "../Images/knits.jpg",
  jackets: "../Images/jackets.jpg",
  jewelry: "../Images/jewelry.jpg",
  watch: "../Images/watch.jpg",
  idk: "../Images/idk.jpg",
  med: "../Images/med.jpg",
  bookshelf: "../Images/bookshelf.jpg",
  silverw: "../Images/silverw.jpg",
  quality: "../Images/quality_.jpg",
  blackbook: "../Images/blackbook.jpg",
  c1: "../Images/c1.jpg",
  c2: "../Images/c2.jpg",
  c3: "../Images/c3.jpg",
  c4: "../Images/c4.jpg",
  c5: "../Images/c5.jpg",
  c6: "../Images/c6.jpg",
};

function App() {
  return (
    <div className="shop-section">
      {/* Box1 */}
      <div className="box1 box">
        <div className="box-content">
          <h2>Gaming accessories</h2>
          <div className="four-link-image">
            <a href="#">
              <div
                className="box2-img"
                style={{
                  backgroundImage: `url('${images.headset}')`,
                  backgroundSize: "cover",
                }}
              ></div>
              <p>Headsets</p>
            </a>
            <a href="#">
              <div
                className="box2-img"
                style={{
                  backgroundImage: `url('${images.keyboard}')`,
                }}
              ></div>
              <p>Keyboards</p>
            </a>
            <div className="img-sep"></div>
            <a href="#">
              <div
                className="box2-img"
                style={{
                  backgroundImage: `url('${images.mouse}')`,
                }}
              ></div>
              <p>Computer Mice</p>
            </a>
            <a href="#">
              <div
                className="box2-img"
                style={{
                  backgroundImage: `url('${images.chair}')`,
                }}
              ></div>
              <p>Chairs</p>
            </a>
            <div className="img-sep"></div>
          </div>
          <p>See more</p>
        </div>
      </div>

      {/* Box2 */}
      <div className="box2 box">
        <div className="box-content">
          <h2>Shop deals in Fashion</h2>
          <div className="four-link-image">
            <a href="#">
              <div
                className="box2-img"
                style={{ backgroundImage: `url('${images.jeans}')` }}
              ></div>
              <p>Jeans under $50</p>
            </a>
            <a href="#">
              <div
                className="box2-img"
                style={{ backgroundImage: `url('${images.tshirt}')` }}
              ></div>
              <p>Tops under $25</p>
            </a>
            <div className="img-sep"></div>
            <a href="#">
              <div
                className="box2-img"
                style={{ backgroundImage: `url('${images.tops}')` }}
              ></div>
              <p>Dresses under $30</p>
            </a>
            <a href="#">
              <div
                className="box2-img"
                style={{ backgroundImage: `url('${images.shoes}')` }}
              ></div>
              <p>Shoes under $30</p>
            </a>
            <div className="img-sep"></div>
          </div>
          <p>See all deals</p>
        </div>
      </div>

      {/* Box3 */}
      <div className="box3 box">
        <div className="box-content">
          <h2>Deals in PCs</h2>
          <div
            className="box3-img"
            style={{
              backgroundImage: `url('${images.pc}')`,
            }}
          ></div>
          <p>Shop now</p>
        </div>
      </div>

      {/* Box4 */}
      <div className="box4 box">
        <div className="box-content">
          <h2>Refresh your space</h2>
          <div className="four-link-image">
            <a href="#">
              <div
                className="box2-img"
                style={{
                  backgroundImage: `url('${images.dining}')`,
                  backgroundSize: "cover",
                }}
              ></div>
              <p>Dining</p>
            </a>
            <a href="#">
              <div
                className="box2-img"
                style={{ backgroundImage: `url('${images.home}')` }}
              ></div>
              <p>Home</p>
            </a>
            <div className="img-sep"></div>
            <a href="#">
              <div
                className="box2-img"
                style={{ backgroundImage: `url('${images.kitchen}')` }}
              ></div>
              <p>Kitchen</p>
            </a>
            <a href="#">
              <div
                className="box2-img"
                style={{ backgroundImage: `url('${images.healthBeauty}')` }}
              ></div>
              <p>Health & Beauty</p>
            </a>
            <div className="img-sep"></div>
          </div>
          <p>Shop now</p>
        </div>
      </div>

      <div className="seperator"></div>

      {/* Box5 */}
      <div className="box5 box">
        <div className="box-content">
          <h2>Amazon Gadget Store</h2>
          <div className="four-link-image">
            <a href="#">
              <div
                className="box5-img-big"
                style={{
                  backgroundImage: `url('${images.smartphones}')`,
                  backgroundSize: "cover",
                }}
              ></div>
              <p>Smartphones</p>
            </a>
            <div className="img-sep"></div>
            <a href="#">
              <div
                className="box5-img-small"
                style={{ backgroundImage: `url('${images.tablets}')` }}
              ></div>
              <p>Tablets</p>
            </a>
            <a href="#">
              <div
                className="box5-img-small"
                style={{ backgroundImage: `url('${images.laptops}')` }}
              ></div>
              <p>Laptops</p>
            </a>
            <a href="#">
              <div
                className="box5-img-small"
                style={{ backgroundImage: `url('${images.tvs}')` }}
              ></div>
              <p>TVs</p>
            </a>
            <div className="img-sep"></div>
          </div>
          <p>See more from Amazon Gadgets</p>
        </div>
      </div>

      {/* Box6 */}
      <div className="box6 box">
        <div className="box-content">
          <h2>Home décor under $50</h2>
          <div
            className="box3-img"
            style={{ backgroundImage: `url('${images.decor}')` }}
          ></div>
          <p>Shop now</p>
        </div>
      </div>

      {/* Box7 */}
      <div className="box7 box">
        <div className="box-content">
          <h2>Toys under $25</h2>
          <div
            className="box3-img"
            style={{ backgroundImage: `url('${images.toys}')` }}
          ></div>
          <p>Shop now</p>
        </div>
      </div>

      {/* Box8 */}
      <div className="box8 box">
        <div className="box-content">
          <h2>Fashion trends</h2>
          <div className="four-link-image">
            <a href="#">
              <div
                className="box2-img"
                style={{
                  backgroundImage: `url('${images.dresses}')`,
                  backgroundSize: "cover",
                }}
              ></div>
              <p>Dresses</p>
            </a>
            <a href="#">
              <div
                className="box2-img"
                style={{ backgroundImage: `url('${images.knits}')` }}
              ></div>
              <p>Knits</p>
            </a>
            <div className="img-sep"></div>
            <a href="#">
              <div
                className="box2-img"
                style={{ backgroundImage: `url('${images.jackets}')` }}
              ></div>
              <p>Jackets</p>
            </a>
            <a href="#">
              <div
                className="box2-img"
                style={{ backgroundImage: `url('${images.jewelry}')` }}
              ></div>
              <p>Jewelry</p>
            </a>
          </div>
          <p style={{ marginTop: "20px" }}>Explore more</p>
        </div>
      </div>

      <div className="img-sep"></div>

      {/* Slideshow1 */}
      <div className="slideshow">
        <h2>Top picks for India</h2>
        <div className="slideshow1">
          <div className="ss-one-img">
            <a href="#">
              <div
                className="ss-img"
                style={{ backgroundImage: `url('${images.watch}')` }}
              ></div>
            </a>
          </div>
          <div className="ss-one-img">
            <a href="#">
              <div
                className="ss-img"
                style={{
                  backgroundImage: `url('${images.idk}')`,
                  backgroundSize: "cover",
                  width: "206px",
                }}
              ></div>
            </a>
          </div>
          <div className="ss-one-img">
            <a href="#">
              <div
                className="ss-img"
                style={{ backgroundImage: `url('${images.med}')` }}
              ></div>
            </a>
          </div>
          <div className="ss-one-img">
            <a href="#">
              <div
                className="ss-img"
                style={{ backgroundImage: `url('${images.bookshelf}')` }}
              ></div>
            </a>
          </div>
          <div className="ss-one-img">
            <a href="#">
              <div
                className="ss-img"
                style={{ backgroundImage: `url('${images.silverw}')` }}
              ></div>
            </a>
          </div>
          <div className="ss-one-img">
            <a href="#">
              <div
                className="ss-img"
                style={{ backgroundImage: `url('${images.quality}')` }}
              ></div>
            </a>
          </div>
          <div className="ss-one-img">
            <a href="#">
              <div
                className="ss-img"
                style={{ backgroundImage: `url('${images.blackbook}')` }}
              ></div>
            </a>
          </div>
        </div>
      </div>

      <div className="img-sep"></div>

      {/* Slideshow2 */}
      <div className="slideshow">
        <h2>Best Sellers in Clothing, Shoes & Jewelry</h2>
        <div className="slideshow1">
          <div className="ss-one-img">
            <a href="#">
              <div
                className="ss-img"
                style={{
                  backgroundImage: `url('${images.c1}')`,
                  width: "256px",
                  backgroundSize: "contain",
                  height: "100px",
                  marginTop: "80px",
                }}
              ></div>
            </a>
          </div>
          <div className="ss-one-img">
            <a href="#">
              <div
                className="ss-img"
                style={{
                  backgroundImage: `url('${images.c2}')`,
                  backgroundSize: "cover",
                  width: "206px",
                }}
              ></div>
            </a>
          </div>
          <div className="ss-one-img">
            <a href="#">
              <div
                className="ss-img"
                style={{
                  backgroundImage: `url('${images.c3}')`,
                  width: "190px",
                }}
              ></div>
            </a>
          </div>
          <div className="ss-one-img">
            <a href="#">
              <div
                className="ss-img"
                style={{
                  backgroundImage: `url('${images.c4}')`,
                  width: "142px",
                }}
              ></div>
            </a>
          </div>
          <div className="ss-one-img">
            <a href="#">
              <div
                className="ss-img"
                style={{
                  backgroundImage: `url('${images.c5}')`,
                  width: "274px",
                  backgroundSize: "contain",
                  height: "119px",
                  marginTop: "70px",
                }}
              ></div>
            </a>
          </div>
          <div className="ss-one-img">
            <a href="#">
              <div
                className="ss-img"
                style={{
                  backgroundImage: `url('${images.c6}')`,
                  width: "71px",
                }}
              ></div>
            </a>
          </div>
        </div>
      </div>

      <div className="img-sep"></div>
    </div>
  );
}

export default App;

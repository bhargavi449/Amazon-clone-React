import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="Car Mount Phone Holder Desk Stand"
            price={59.99}
            image="https://m.media-amazon.com/images/I/61mKxEow1oL._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            title="Lamaze Peek-A-Boo Forest, Fun Interactive Baby Book with Inspiring Rhymes and Stories"
            price={10}
            image="https://m.media-amazon.com/images/I/91xxqc9IwcL._AC_UY218_.jpg"
            rating={4}
          />

          {/* Product */}
          {/* Product */}
        </div>

        <div className="home__row">
          <Product
            title="RUNMUS Gaming Headset Xbox One Headset"
            price={38.95}
            image="https://m.media-amazon.com/images/I/61lnzTv2a0L._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            title="AmazonBasics Small Digital Alarm Clock with Nightlight and Battery Backup, LED Display"
            price={9.99}
            image="https://m.media-amazon.com/images/I/61inPwwE6sL._AC_SX180_SY120_QL70_.jpg"
            rating={5}
          />
          <Product
            title="Play-Doh Modeling Compound 10 Pack Case of Colors"
            price={7.99}
            image="https://m.media-amazon.com/images/I/81xV+D1OkGL._AC_UL320_.jpg"
            rating={3}
          />
          {/* Product */}
          {/* Product */}
          {/* Product */}
        </div>

        <div className="home__row">
          <Product
            title="SAMSUNG FLAT SMART TV"
            price={497.99}
            image="https://m.media-amazon.com/images/I/51m-OJ7TQIL._AC_UY218_.jpg"
            rating={4}
          />
          {/* Product */}
        </div>
      </div>
    </div>
  );
}

export default Home;
